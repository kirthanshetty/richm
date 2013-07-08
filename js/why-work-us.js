function WhyworkUs(container){
	container.find('.join_us_gallery ul li a').click(function(e){
		e.preventDefault();
		var link = this.href,
			anchor = $(this),
			container = $(this).parent().parent().parent().next();
		$.get(link,function(data){
			container.html(data);
			anchor.parent().parent().find('li.active').removeClass('active');
			anchor.parent().addClass('active');
		});
	})

	$(".maison_next",container).click(function(){
		$(".join_us_gallery ul").find('li.active').removeClass('active').next().addClass('active').find('a').click();
		$(".join_us_gallery ul li:eq(4)").attr('disabled', true).addClass('active');
	});
	$(".maison_prev",container).click(function(){
    	$(".join_us_gallery ul").find('li.active').removeClass('active').prev().addClass('active').find('a').click();
    	$(".join_us_gallery ul li:eq(0)").attr('disabled', true).addClass('active');
	});
}