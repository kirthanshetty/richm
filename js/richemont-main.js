document.body.scrollTop = document.documentElement.scrollTop = 0;
$(function(){
	// this must be at the top to make sure parallex is right
	var WorkUs = WhyworkUs($('.page_4 .section_main'))
	
	var topDelta = $('header').outerHeight();
	parallex = new Parallex('.page',topDelta);
	$('.container.main').height(parallex.totalHeight);
	Navigation();
	var maisons = MaisonBox($('.maisons_lists'),function(){
		parallex.init();
		$('.container.main').height(parallex.totalHeight);
	});
	$(window).resize(function(){
		parallex.init();
		$('.container.main').height(parallex.totalHeight);
	})
	var Career = CareerPath($('.page_5 .inner_content'));

	var SocialShare = ShareIcons($, '.social_links');
})