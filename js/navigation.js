if (typeof(_richemontCareers) != 'object') {
    _richemontCareers = {};
}

_richemontCareers.Navigation = function() {
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
			
			/*
			 $('.collapsed').on('mouseover', function(){
        		$(this).addClass('hover');
        		$(".header_right").addClass('menu_list');
				$(".header_right ul").removeClass('second_row');
				$(".menu_list").show();
    		 });
    		 $('.collapsed').on('mouseout', function(){
        		 $(this).removeClass('hover');
        		 $(".menu_list").hide();
    		 });
    		 $('.collapsed').on('touchend', function(){
        		 $(this).toggleClass('hover');
    		 });
    		 $('.collapsed').bind('touchstart touchend', function(e) {
        		e.preventDefault();
        		$(this).toggleClass('hover');
    		 });
			 */
			 if(navigator.userAgent.match(/(iPhone|iPod)/i))
			 	{
			 		
			 		var mobileNav = $("div.collapsed .header_right");
			 		$('.collapsed').click(function(){
			 			$(".collapsed nav ul").removeClass('second_row');
            			mobileNav.toggle(20);
        	 		});
        	 		$('.collapsed ul li a').on('touchend', function(){
        	 			var el = $(this);
    					var link = el.attr('href');
    					window.location = link;
    					mobileNav.toggle();
        	 		});
        	 		setTimeout(function() {
      					$(".container").click(function(){
        	 				mobileNav.hide();
        	 			});
					}, 100);
					/*
					setTimeout(function() {
      					$(".collapsed").click(function(){
        	 				$(".collapsed").removeClass('no-touch');
        	 			});
					}, 200);
					timeout = setTimeout('timeout_trigger()', 1000);
					clearTimeout(timeout);
					*/
					/*
					$('.collapsed').on('touchend', function() {
  						$(this).removeCss('background', 'url("../img/parallax/sprite.png") no-repeat scroll 3px -960px #E7E7E7');
					});*/
				}
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