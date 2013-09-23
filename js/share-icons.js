if (typeof(_richemontCareers) != 'object') {
    _richemontCareers = {};
}

_richemontCareers.ShareIcons = function($, container){
	
	$(container).each(function(){

		var shareIcons = $(this).find('ul li:not(:first-child)');
		shareIcons.hide();
		var showing = false;
		var timeout;

		$(this).find('ul li').hover(function(){
			$(this).siblings().fadeIn();
			showing = true;
			clearTimeout(timeout);
		}, function(){
			showing = false;
		});

		$(this).mouseout(function(){
			timeout = setTimeout(function(){
				if (!showing) {
				shareIcons.delay(1000).fadeOut();
			}
		}, 1000);
			
		});
	});
}

