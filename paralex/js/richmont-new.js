// Parallex effect
function Parallex(els){
	var winh;

	// Update height on resize
	$(window).on('resize',function(){
		winh = $(window).height();
		els.css('min-height',winh)
	}).resize();


	this.updatePositions = function(){
		els.css({'position':'relative','top':0});

		
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

function MaisonBox(container,callback){
	container.find('>ul li a').click(function(){
		var link = this.href,
			anchor = $(this),
			listCont = $(this).parent().parent();
		$.get(link,function(data){
			var $responseEl = $(data);
			if(listCont.next().length < 1){
				listCont.prepend($responseEl)
			}else{
				listCont.append($responseEl)
			}
			callback();
		});
		return false;
	})
}

function WhyworkUs(container){
	console.log(container.find('.creativity_head ul li a'));
	container.find('.creativity_head ul li a').click(function(e){
		e.preventDefault();
		var link = this.href,
			anchor = $(this),
			container = $(this).parent().parent().parent().next();

		$.get(link,function(data){
			container.html(data);
			anchor.parent().parent().find('li.active').removeClass('active');
			anchor.parent().addClass('active');
		});
	})
}



$(function(){
	var parallex = new Parallex($('.page'));
	var maisons = MaisonBox($('.maisons_lists'),parallex.updatePositions)
	var WorkUs = WhyworkUs($('.page_4 .section_main'))
})


$(function(){
	var wd = $(".gallery_container").find('.content:eq(0)').outerWidth()
	$(".gallery_container").width(wd).css('overflow','hidden');
	$(".gallery_container .content").width(wd);
	var slides = $(".gallery_container").find('.slides').width(wd*3);
	$('.our_world h1').css('padding-left','3px');
	var noSlides = 3,
	      curSlide = 0;

	$('.gallery_join .our_world a.next').click(function(){
	    curSlide ++;
	    if(curSlide >= noSlides) curSlide = 0;
	    slides.animate({'margin-left': -1 * wd * curSlide });
	 });
	$('.gallery_join .our_world a.prev').click(function(){
	    curSlide --;
	    if(curSlide < 0) curSlide = noSlides - 1;
	    slides.animate({'margin-left': -1 * wd * curSlide });
	 });
});

$(function(){
	var wdt = $('.career_gallery ul li').width()
	var cnt = $('.career_gallery_container ul li').length
	$('.career_gallery_container').width(wdt*5).css('overflow','hidden');
	var slides = $('.career_gallery_container .slides').width(wdt*cnt);
	var noSlides = cnt - 4,
	      curSlide = 0;

	$('.career_gallery a.next').click(function(){
	  curSlide ++;
	  if(curSlide >= noSlides) curSlide = 0;
	  slides.animate({'margin-left': -1 * wdt * curSlide });
	});
	$('.career_gallery a.prev').click(function(){
	  curSlide --;
	  if(curSlide < 0) curSlide = noSlides - 1;
	  slides.animate({'margin-left': -1 * wdt * curSlide });
	});
});

/* Script of Search block Pop-Up */
  $(".search").mouseover(function(){
    $(".search_block").show();
  });
  $(".search").mouseout(function(){
    $(".search_block").hide();
  });

  /* Script of Click scroll to Top */
  $(".scroll_top img").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });