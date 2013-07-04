function CareerPath(container){
	container.find('.career_gallery ul li a').click(function(e){
		e.preventDefault();
		var link = this.href,				
			anchor = $(this),
			container = $(this).parent().parent().parent().parent().parent().next();
		$.get(link,function(data){
			container.html(data);
			anchor.parent().parent().find('li.active').removeClass('active');
			anchor.parent().addClass('active');
		});
	})
	
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
}