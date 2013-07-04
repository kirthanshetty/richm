function Navigation(){
	$('header ul li a').click(function(e){
		e.preventDefault();
		var hash = $(this).attr('href');
		var node = $(hash);
		node.attr('id','');
		window.location.hash = hash;
		node.attr('id',hash.replace(/^#/,''));
	})

	window.onhashchange = navigate;
	setTimeout(function(){
		navigate();
	},250);

	function navigate(){
		var id = window.location.hash;
		var parallex = $(id).data('parallexel');
		if(parallex)
			parallex.scrollToMe();
	}
}


/* Script of Search block Pop-Up */
  $(".search").mouseover(function(){
    $(".search_block").show();
  });
  $(".search").mouseout(function(){
    $(".search_block").hide();
  });

  /* Script of Click scroll to Top */
  $(".scroll_top img").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
