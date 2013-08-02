/* Script of Search block Pop-Up */
	$(".search").mouseover(function(){
		$(".search_block").show();
		$(".search_block").find('input:text').focus();
	});

	var hideTimer;
	$(".search_block").find('input:text').blur(function(){
		$(".search_block").hide();
	});