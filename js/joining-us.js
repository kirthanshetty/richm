$(function(){
	// var wd = $(".gallery_container").find('.content:eq(0)').outerWidth()

	$(".gallery_container").width('100%').css('overflow','hidden');
	$(".gallery_container .content").width('33.33%');
	var slides = $(".gallery_container").find('.slides').width('300%');
	$('.our_world h2').css('padding-left','3px');
	var ulList = $('.gallery_join .our_world ul.buttons');
	var nextEl = $('.gallery_join .our_world a.next, #work-with-us a.next');
	var prevEl = $('.gallery_join .our_world a.prev, #work-with-us a.prev');
	var noSlides = $('.gallery_join .our_world ul.buttons li a').length,
	      curSlide = 0;

	var changeSlide = function(direction){
		activeDot = ulList.find('li.active');
		if(direction == "next"){
			if(curSlide >= noSlides-1){ return false;}
			curSlide ++;
			activeDot.removeClass('active');
			activeDot.next().addClass('active');
		}else if(direction == "prev"){
			if(curSlide <= 0){ return false;}
			curSlide --;
			activeDot.removeClass('active');
			activeDot.prev().addClass('active');
		}else{
			curSlide = direction;
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
});