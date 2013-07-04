document.body.scrollTop = document.documentElement.scrollTop = 0;
$(function(){
	parallex = new Parallex('.page',$('header').outerHeight());
	$('.container.main').height(parallex.totalHeight);
	Navigation();
	var maisons = MaisonBox($('.maisons_lists'),function(){
		parallex.init();
		$('.container.main').height(parallex.totalHeight);
	});
	var WorkUs = WhyworkUs($('.page_4 .section_main'))
})