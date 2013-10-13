// -----------------------------------------------------------------
//                        REQUIREJS MODULE
require(['jquery'],function(){
// -----------------------------------------------------------------
$(function(){
	$(".locations-list h5").click(function(){
	if($(this).hasClass('down-arrow')){
		$(this).removeClass('down-arrow')
	} else {
		$(this).addClass('down-arrow');
	}
    $(this).next().slideToggle(); 
	});
});
// -----------------------------------------------------------------
})
// -----------------------------------------------------------------
