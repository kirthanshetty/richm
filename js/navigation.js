function Navigation(){
	$('.header_main a').click(function(e){
		if($(window).width() < 1024){
			return;
		}
		var href = this.href;
		var winhref = window.location.href.replace(/#.*$/,'');
		href = href.replace(winhref,'');

		if(href.match(/^#/))
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


	$(window).resize(fixnav)
	$(window).load(fixnav)
	fixnav();
	var prevWidth;
	function fixnav(){
		if($(window).width() < 630 && (!prevWidth || prevWidth >= 630) ) {
			$(".collapsed").mouseover(function(){
				$(".header_right").addClass('menu_list');
				$(".header_right ul").removeClass('second_row');
				$(".menu_list").show();
			});
			$(".collapsed").mouseout(function(){
				$(".menu_list").hide();
			});
		}

		if($(window).width() >= 630 && (!prevWidth || prevWidth < 630) ) {
			$(".header_right").removeClass('menu_list').show();
			$(".header_right ul:eq(1)").addClass('second_row');
			$(".collapsed").unbind('mouseover');
			$(".collapsed").unbind('mouseout');
		}
		prevWidth = $(window).width();
	}
	/* Script of Click scroll to Top */
	$(".scroll_top img").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
}