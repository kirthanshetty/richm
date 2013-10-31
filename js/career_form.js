
// -----------------------------------------------------------------
//                        REQUIREJS MODULE
require(['jquery'],function(){
// -----------------------------------------------------------------
if (typeof(_richemontCareers) != 'object') {
	_richemontCareers = {};
}
_richemontCareers.AttachFormEvents = function(recomputeCallback){

 	$('.tab_content_full').delegate('.form_submission a.prev', 'click', function(e){
 		e.preventDefault();
 		recomputeCallback();
		$(this).parent().parent().hide().prev().show();
	});

	$('.tab_content_full').delegate('.form_submission a.next', 'click', function(e){
		e.preventDefault();
		recomputeCallback();
		$(this).parent().parent().hide().next().show();
	});
}
});
// -----------------------------------------------------------------

// -----------------------------------------------------------------


