function ParallexPosition(top,bottom,speed,screenH){
	this.top = top;
	this.bottom = bottom;
	this.speed = speed;

	this.pageHeightLower = (this.bottom - this.top) < screenH;
	this.maxDelta = bottom + bottom - top;

	this.bottomReached = function(scrollBottom){
		return this.bottom <= scrollBottom;
	}

	this.topAboveView = function(scrollTop){
		return this.top <= scrollTop;
	}

	this.bottomAboveView = function(scrollTop){
		return scrollTop >= this.bottom
	}

	this.needChange = function(scrollTop,scrollBottom){
		return this.bottomReached(scrollBottom) && 
					this.topAboveView(scrollTop) && 
					!this.bottomAboveView(scrollTop)
	}

	this.getTop = function(scrollTop,scrollBottom,topDelta){
		var staticTop = this.pageHeightLower?0:(screenH + this.top - this.bottom);
		if(!this.speed)
			return staticTop;
		else
			return staticTop - ((scrollTop - this.top) * this.speed);
	}
}

function ParallexRelEl(el,parentTop){
	el.css('position','relative');
	this.speed = el.data('speed');
	if(!this.speed) this.speed = 0.2;

	this.scroll = function(scrollTop){
		el.css('top',((parentTop-scrollTop) * this.speed))
	}
}

function ParallexEl(el,top,screenH){

	var parallexEl = this;

	this.el = el;
	this.top = top;
	this.bottom = top + el.outerHeight();

	this.position = new ParallexPosition(top,this.bottom,el.data('speed'),screenH);

	this.relEls = el.find('.rel_position');
	this.relParallex = [];

	this.relEls.each(function(i,el){
		var pRel = new ParallexRelEl($(el),parallexEl.top);
		pRel.scroll(0);
		parallexEl.relParallex.push(pRel);
	})

	this.posChanged = false;

	this.init = function(){
		this.el.css({
			'position':'absolute',
			'top': this.top
		});
	}

	this.scrollToMe = function(){
		$('html').animate({scrollTop:this.top},500)
	}

	this.updatePos = function(scrollTop,scrollBottom,topDelta){
		if(this.position.needChange(scrollTop,scrollBottom)){
			this.el.css({
				'top':this.position.getTop(scrollTop,scrollBottom,topDelta),
				'position': 'fixed'
			});
			this.posChanged = true;
		}else if(this.posChanged){
			this.el.css({
				'top':this.top,
				'position':'absolute'
			});
			this.posChanged = false;
		}

		for (var i = 0; i < this.relParallex.length; i++) {
			this.relParallex[i].scroll(scrollTop);
		};
	}
}

function Parallex(els,topDelta){

	var parallex = this,
		$els = $(els);

	var $window = $(window);

	
	this.init = function(){
		this.parallexEls = [];
		var top = 0;
		$els.each(function(){
			var parallexEl = new ParallexEl($(this),top,screen.height-topDelta);
			parallex.parallexEls.push(parallexEl);
			parallexEl.init();
			$(this).data('parallexel',parallexEl);
			top += $(this).outerHeight();
		});
		this.totalHeight = top;
	}

	this.init();

	$window.on('scroll',function(){
		var scrollTop = $window.scrollTop()-topDelta,
			scrollBottom = scrollTop + screen.height - topDelta;

		for (var i = 0; i < parallex.parallexEls.length; i++) {
			parallex.parallexEls[i].updatePos(scrollTop,scrollBottom,topDelta);
		};
	})
}