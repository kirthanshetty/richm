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
	var outerW = $('.career_gallery_container').width('100%').css('overflow','hidden').width();
	var slides = $('.career_gallery_container .slides').width(totalW);


	var marginLeft = 0;

	var nextBtn = $('.career_gallery a.next').click(function(){
		marginLeft += wdt;
		if(marginLeft > totalW - outerW)
			marginLeft = totalW - outerW
		var nextItem = container.find('.career_gallery ul li.active').next();
		if(nextItem.length < 1){
			marginLeft = 0;	
			nextItem = container.find('.career_gallery ul li:first');
		}
		nextItem.find('a').click(); 
		slides.animate({'margin-left': -1 * marginLeft });
	});
	var prevBtn = $('.career_gallery a.prev').click(function(){
		marginLeft -= wdt;
		if(marginLeft < 0)
			marginLeft = 0
		var prevItem = container.find('.career_gallery ul li.active').prev();
		if(prevItem.length < 1){
			marginLeft = totalW - outerW;	
			prevItem = container.find('.career_gallery ul li:last');
		}
		prevItem.find('a').click(); 
		slides.animate({'margin-left': -1 * marginLeft });
	});

	if(outerW >= totalW) {
		nextBtn.hide();
		prevBtn.hide();
	}

	var keys = _richemontCareers.KeyCodes;
	var handler = {};
	handler[keys.LEFT] = function(){ 
		prevBtn.click();
	}
	handler[keys.RIGHT] = function(){ 
		nextBtn.click();
	}
	_richemontCareers.KeyboardAccess(container.find('.career_gallery'),handler);
}