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

	this.getDelta = function(scrollTop,scrollBottom){
		return this.pageHeightLower ? (scrollTop - this.top):(scrollBottom - this.bottom);
	}

	this.getTop = function(scrollTop,scrollBottom,topDelta){
		var staticTop = this.pageHeightLower?0:(screenH + this.top - this.bottom);
		staticTop += topDelta;

		if(!this.speed)
			return staticTop;

		return staticTop - (this.getDelta(scrollTop,scrollBottom) * this.speed);
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

function ParallexEl(el,top,screenH,topDelta){

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
		$('html,body').animate({scrollTop:this.top - topDelta},1000)
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

		if(this.el.data('type') == 'background'){
			this.el.css('background-position','50% ' + this.position.getDelta(scrollTop,scrollBottom) + 'px')
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

	if($window.width() < 1024 || Modernizr.touch){
		this.init = function(){}
		this.totalHeight = 'auto';
		return;
	}

	this.init = function(){
		this.parallexEls = [];
		var top = topDelta;
		$els.each(function(){
			var parallexEl = new ParallexEl($(this),top,getWindowSize().height-topDelta,topDelta);
			parallex.parallexEls.push(parallexEl);
			$(this).data('parallexel',parallexEl);
			top += $(this).outerHeight();
			parallexEl.init();
		});
		this.totalHeight = top;
		$window.trigger('scroll');
	}

	this.init();

	$window.on('scroll',function(){
		var scrollTop = $window.scrollTop() + topDelta,
			scrollBottom = $window.scrollTop() + getWindowSize().height;

		for (var i = 0; i < parallex.parallexEls.length; i++) {
			parallex.parallexEls[i].updatePos(scrollTop,scrollBottom,topDelta);
		};
	})
}

function getWindowSize() {
  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }
  return {height:myHeight,width:myWidth};
}