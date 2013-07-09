function WhyworkUs(container){
	var tabAnchors = container.find('.join_us_gallery ul li a'),
		headerCont = container.find('.head_cont'),
		mainCont = container.find('.main_cont'),
		prevBtn = container.find('.maison_prev'),
		nextBtn = container.find('.maison_next');

	tabAnchors.each(function(i,el){ 
		$(el).data('idx', i); 
	});

	headerCont.width((tabAnchors.length * 100) + '%');
	headerCont.find('.bg_img').width((100 / tabAnchors.length) + '%');

	tabAnchors.click(function(e){
		e.preventDefault();
		var anchor = $(this)
		$.get($(this).attr('href'),function(data){
			anchor.parent().parent().find('li').removeClass('active');
			anchor.parent().addClass('active');
			
			var ajaxCont = $(data),
				maisonCont = ajaxCont.find('.main_cont'),
				leftMargin = '-' + (100 * anchor.data('idx')) + '%';


			headerCont.animate({'margin-left': leftMargin })

			mainCont.after(maisonCont.hide());
			mainCont.fadeOut(function(){
				$(this).remove();
				mainCont = maisonCont;
			});
			maisonCont.fadeIn();

		})
	})

	prevBtn.click(function(){
		tabAnchors.parent().parent().find('li.active').prev().find('a').click();
	})

	nextBtn.click(function(){
		tabAnchors.parent().parent().find('li.active').next().find('a').click();
	})
}