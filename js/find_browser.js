if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) 
	{
		$('.maisons_lists ul li').removeClass('fading').addClass('shading');
		$('.maison_close').click(function(){
			setTimeout(function() {
            	$('.maisons_lists ul li').removeClass('shading');
        	}, 1000);
        });
    };