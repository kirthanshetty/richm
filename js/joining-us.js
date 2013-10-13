// -----------------------------------------------------------------
//                        REQUIREJS MODULE
require(['jquery'],function(){
// -----------------------------------------------------------------
$(function(){
	// var wd = $(".gallery_container").find('.content:eq(0)').outerWidth()

	$(".gallery_container").width('100%').css('overflow','hidden');
	var noSlides = $(".gallery_container .content").length;
	$(".gallery_container .content").width( (100/noSlides) + '%' ); 
	var slides = $(".gallery_container").find('.slides').width((noSlides * 100) + '%');
	$('.our_world h2').css('padding-left','3px');
	var ulList = $('.gallery_join .our_world ul.buttons');
	var nextEl = $('.gallery_join .our_world a.next, #work-with-us a.next');
	var prevEl = $('.gallery_join .our_world a.prev, #work-with-us a.prev');
	var sectionImg = $('.section_images img.active');
	var multipleSections = $('.gallery_join .two_sections.active');
	var buttonsContainer = $('.gallery_join .buttons');

	$(".gallery_container .content").each(function(){
		buttonsContainer.append('<li><a href="#" title="Button"></a></li>');
	})
	buttonsContainer.find('li:first').addClass('active');
	/*var noMainImages = $('.section_images img.global.active');
	var noMainSlides = $('.gallery_join .two_sections.global_two_sections.active');*/
	var curSlide = 0;
	var changeSlide = function(direction){
		activeDot = ulList.find('li.active');

		var sectionImg = $('.section_images img.active');
		var multipleSections = $('.gallery_join .two_sections.active');
		if(direction == "next"){
			if(curSlide >= noSlides-1){ return false;}
			/*if(noMainSlides){ return false;}
			if(noMainImages){ return false;}*/
			sectionImg.fadeOut().removeClass('active').next().fadeIn().addClass('active');
			multipleSections.fadeOut().removeClass('active').next().fadeIn().addClass('active');
			curSlide ++;
			activeDot.removeClass('active');
			activeDot.next().addClass('active');

		}else if(direction == "prev"){
			if(curSlide <= 0){ return false;}
			sectionImg.fadeOut().removeClass('active').prev().fadeIn().addClass('active');
			multipleSections.fadeOut().removeClass('active').prev().fadeIn().addClass('active');
			curSlide --;
			activeDot.removeClass('active');
			activeDot.prev().addClass('active');
			
		}else{
			curSlide = direction;
			sectionImg.fadeOut().removeClass('active')
			sectionImg.parent().find('img').eq(curSlide).fadeIn().addClass('active');
			multipleSections.fadeOut().removeClass('active')
			multipleSections.parent().find('.two_sections').eq(curSlide).fadeIn().addClass('active');
			activeDot.removeClass('active');
			ulList.find('li').eq(direction).addClass('active');
		}
				
		if(curSlide >= noSlides-1){
			nextEl.addClass('inactive');
			prevEl.removeClass('inactive');
		}else if(curSlide <= 0){
			prevEl.addClass('inactive');
			nextEl.removeClass('inactive');
		}else{
			nextEl.removeClass('inactive');
			prevEl.removeClass('inactive');
		}

		slides.animate({'margin-left': (-100 * curSlide) + '%' });
	
	}

	$('.gallery_join .our_world a.next, #work-with-us a.next').click(function(){
		changeSlide('next');
	 });
	
	$('.gallery_join .our_world a.prev, #work-with-us a.prev').click(function(){
		changeSlide('prev');
	 });

	$('.gallery_join .our_world ul.buttons li a').click(function(e){
		e.preventDefault();
		changeSlide($(this).parent().index());
	});

	var keys = _richemontCareers.KeyCodes;
	var handler = {};
	handler[keys.LEFT] = function(){ 
		changeSlide('prev')
	}
	handler[keys.RIGHT] = function(){ 
		changeSlide('next')
	}
	
	_richemontCareers.KeyboardAccess($(".gallery_container"),handler);
	_richemontCareers.KeyboardAccess($("#work-with-us"),handler);
});

// -----------------------------------------------------------------
})
// -----------------------------------------------------------------
