// -----------------------------------------------------------------
//                        REQUIREJS MODULE
require([
	'jquery', 'vendor/jquery.placeholder.1.3', 'parallax', 'navigation', 'customselect', 'social-links', 'keyboard-accessibility', 'our-maisons', 'joining-us', 'career-path', 'why-work-us', 'share-icons', 'richemont-main', 'video', 'vendor/vjs.youtube' ,'location', 'find_browser', 'career_form'
	],function(){
// -----------------------------------------------------------------


if (typeof(_richemontCareers) != 'object') {
    _richemontCareers = {};
}

_richemontCareers.objects = {};

document.body.scrollTop = document.documentElement.scrollTop = 0;
$(function(){
	// this must be at the top to make sure parallax is right
	_richemontCareers.objects.WorkUs = _richemontCareers.WhyworkUs($('.page_4 .section_main'))
	
	var topDelta = $('header').outerHeight();
	_richemontCareers.objects.parallax = new _richemontCareers.Parallax('.page',topDelta);
	$('.container.main').height(_richemontCareers.objects.parallax.totalHeight);
	_richemontCareers.Navigation();
	_richemontCareers.objects.maisons = _richemontCareers.MaisonBox($('.maisons_lists'),function(){
		_richemontCareers.objects.parallax.init();
		$('.container.main').height(_richemontCareers.objects.parallax.totalHeight);
	});
	$(window).resize(function(){
		_richemontCareers.objects.parallax.init();
		$('.container.main').height(_richemontCareers.objects.parallax.totalHeight);
	})
	_richemontCareers.objects.Career = _richemontCareers.CareerPath($('.page_6 .inner_content'));

	_richemontCareers.objects.SocialShare = _richemontCareers.ShareIcons($, '.social_links');

	_richemontCareers.AttachFormEvents(function(){
		_richemontCareers.objects.parallax.init();
		$('.container.main').height(_richemontCareers.objects.parallax.totalHeight);
	})
})

// -----------------------------------------------------------------
})
// -----------------------------------------------------------------
