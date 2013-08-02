if (typeof(_richemontCareers) != 'object') {
	_richemontCareers = {};
}

_richemontCareers.CareerPath = function(container){
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
	var totalW = wdt * cnt;
	$('.career_gallery_container').width('100%').css('overflow','hidden');
	var slides = $('.career_gallery_container .slides').width(totalW);

	var marginLeft = 0;

	$('.career_gallery a.next').click(function(){
		marginLeft += wdt;
		if(marginLeft > totalW - $('.career_gallery_container').width())
			marginLeft = totalW - $('.career_gallery_container').width()
	  slides.animate({'margin-left': -1 * marginLeft });
	});
	$('.career_gallery a.prev').click(function(){
		marginLeft -= wdt;
		if(marginLeft < 0)
			marginLeft = 0
	  slides.animate({'margin-left': -1 * marginLeft });
	});
}