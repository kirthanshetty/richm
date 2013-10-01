
// -----------------------------------------------------------------
//                        REQUIREJS MODULE
require(['jquery'],function(){
// -----------------------------------------------------------------
	 	$('.tab_content_full').delegate('.form_submission a.prev', 'click', function(e){
	 		e.preventDefault();
			$(this).parent().parent().hide().prev().show();
		});

		$('.tab_content_full').delegate('.form_submission a.next', 'click', function(e){
			e.preventDefault();
			$(this).parent().parent().hide().next().show();
		});
	});
// -----------------------------------------------------------------

// -----------------------------------------------------------------


