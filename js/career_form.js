// -----------------------------------------------------------------
//                        REQUIREJS MODULE
require(['jquery'],function(){
// -----------------------------------------------------------------
$(function(){
	$('.form_submission a.prev').click(function(){
		$(this).parent().parent().hide().prev().show();
	});
	$('.form_submission a.next').click(function(){
		$(this).parent().parent().hide().next().show();
	});
});


// -----------------------------------------------------------------
})
// -----------------------------------------------------------------
