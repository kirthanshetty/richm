var videoNo = 1;

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

			mainCont.after(maisonCont);
			mainCont.hide();
			mainCont = maisonCont;
			videoHandler(maisonCont);
		})
	})
	videoHandler(mainCont);

	prevBtn.click(function(){
		tabAnchors.parent().parent().find('li.active').prev().find('a').click();
	})

	nextBtn.click(function(){
		tabAnchors.parent().parent().find('li.active').next().find('a').click();
	})

	function videoHandler(el){
		el.find('a[rel="video"]').click(function(e){
			e.preventDefault();
			$.get($(this).attr('href'),function(data){
				var cont = $(data);
				cont.css({
					'position':'fixed',
					'top': 0,
					'left': 0,
					'height': '100%',
					'width': '100%',
					'background': '#000',
					'z-index':'1000'
				});
				cont.appendTo(document.body);
				$('#video_content').attr('id','video_content' + videoNo);
				videojs('video_content' + videoNo++);
				cont.find('a.video_close').click(function(e){
					e.preventDefault();
					cont.remove();
				})
			})
		})
	}
}