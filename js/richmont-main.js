$(function(){
	parallex = new Parallex('.page',$('header').outerHeight());
	$('.container.main').height(parallex.totalHeight);
	Navigation();
})