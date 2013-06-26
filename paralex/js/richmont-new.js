// Parallex effect
function Parallex(els){
	var winh;

	// Update height on resize
	$(window).on('resize',function(){
		winh = $(window).height();
		els.css('min-height',winh)
	}).resize();


	this.updatePositions = function(){
		els.css('position','relative');

		
		// compute the offsets
		$.each(els,function(i,el){
			var top = $(el).position().top;
			$(el).data('myTop',top);
		})

		$.each(els,function(i,el){
			var myTop = $(el).data('myTop');
			$(el).css({
				'position':'absolute',
				'top': myTop
			}).data('myBottom',myTop + $(el).outerHeight())
		})
		var lastEl = els.eq(-1);
			totalHeight = lastEl.data('myTop') + lastEl.outerHeight();
		els.parent().css('height',totalHeight)
	}

	this.updatePositions();

	$(window).on('scroll',function(){
		var scrollTop = $(window).scrollTop(),
			winBottom = scrollTop + winh;
		$.each(els,function(i,el){
			var $el = $(el),
				myTop = $el.data('myTop'),
				myBottom = $el.data('myBottom'),
				relSpeed = $el.data('speed'),
				childPralexEls = $el.find('[data-type="foreground"]');

			if(winBottom > myBottom){
				var delta = winBottom - myBottom;
				// if(relSpeed)
				// 	delta /= relSpeed;
				$el.css('top',myTop + delta)
			}else{
				$el.css('top',myTop)
			}

			$.each(childPralexEls,function(i,el){
				var $el = $(el),
					speed = $el.data('speed'),
					delta = (myTop - scrollTop) / speed;

				$el.css({ 
					'position':'relative', 
					'top':delta
				});
			})
		})
	})
}

function MaisonBox(container){
	container.find('>ul li a').click(function(){
		var link = this.href,
			anchor = $(this),
			listCont = $(this).parent().parent();
		$.get(link,function(doc,status,xhr){
			var $responseEl = $(xhr.responseText);
			if(listCont.next().length < 1){
				listCont.prepend($responseEl)
			}else{
				listCont.append($responseEl)
			}
		});
		return false;
	})
}

$(function(){
	var parallex = Parallex($('.page'))
	var maisons = MaisonBox($('.maisons_lists'))
})