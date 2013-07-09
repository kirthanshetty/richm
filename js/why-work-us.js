function WhyworkUs(container){
	var tabAnchors = container.find('.join_us_gallery ul li a'),
		headerCont = container.find('.head_cont'),
		mainCont = container.find('.main_cont');

	tabAnchors.click(function(e){
		e.preventDefault();
		var anchor = $(this)
		$.get($(this).attr('href'),function(data){
			anchor.parent().parent().find('li').removeClass('active');
			anchor.parent().addClass('active');
			
			var ajaxCont = $(data),
				bgImage = ajaxCont.find('.bg_img'),
				maisonCont = ajaxCont.find('.main_cont');

			headerCont.append(bgImage);
			
			bgImage.find('*').css('left','50%')
			bgImage.find('*').animate({'left':'0%'});

			headerCont.animate({'margin-left':'-100%'},function(){
				$(this).find('.bg_img:first').remove();
				$(this).css('margin-left',0)
			})

			mainCont.after(maisonCont);
			
		})
	})
}