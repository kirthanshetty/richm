if (typeof(_richemontCareers) != 'object') {
    _richemontCareers = {};
}



_richemontCareers.WhyworkUs = function(container){
	var tabAnchors = container.find('.join_us_gallery ul li a'),
		headerCont = container.find('.head_cont'),
		mainCont = container.find('.main_cont'),
		prevBtn = container.find('.maison_prev'),
		nextBtn = container.find('.maison_next'),
		videoNo = 1,
		anchorList = container.find('.join_us_gallery ul'),
		anchorListItem = anchorList.find('>li'),
		firstAnchorListItem = anchorListItem.filter(':eq(0)');



	function fixMargin(){
		if($(window).width() > 1160 || $(window).width() < 768) {
			anchorListItem.filter(':eq(0)').css('margin-left',"");
			return;
		}
		var totalW = anchorList.width(),
			itemW = 0,
			itemMargin = parseInt(firstAnchorListItem.next().css('margin-left').replace(/px/,''));
		anchorListItem.each(function(){ itemW += $(this).width() + itemMargin + itemMargin; })

		if( (totalW - itemW) > itemMargin )
			firstAnchorListItem.css('margin-left', Math.floor((totalW - itemW) / 2) )
	}
	fixMargin();
	$(window).resize(fixMargin);

	tabAnchors.each(function(i,el){ 
		$(el).data('idx', i); 
	});

	headerCont.width((tabAnchors.length * 100) + '%');
	headerCont.find('.bg_img').width((100 / tabAnchors.length) + '%');

	tabAnchors.click(function(e){
		e.preventDefault();
		var anchor = $(this)
		$.get($(this).attr('href'),function(data){
			anchor.parent().parent().parent().find('li').removeClass('active');
			anchor.parent().parent().addClass('active');
			
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
		var el = tabAnchors.parent().parent().parent().find('li.active').prev();
		if(el.length < 1) el = tabAnchors.parent().parent().parent().find('li:last');
		el.find('a').click();
	})

	nextBtn.click(function(){
		var el = tabAnchors.parent().parent().parent().find('li.active').next();
		if(el.length < 1) el = tabAnchors.parent().parent().parent().find('li:first');
		el.find('a').click();
	})

	function videoHandler(el){
		el.find('a[data-rel="video"]').click(function(e){
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
				var vidId = 'video_content' + videoNo++;
				cont.find('a.video_close').click(function(e){
					e.preventDefault();
					cont.remove();
				})
				/*$("a.video_close").on('touchend', function() {
					$(this).css({'top':'-28px'});
  					$(".video_content").css({'top':'28px'});
  					$("header").css({'background':'#000'});
  					$(".header_right").css('display':'none');
 				});*/
    			// videojs.options.flash.swf = "video-js.swf";
    			// console.log(vidId);
				videojs(vidId,{
					"techOrder": ["youtube"],
					"src" : $('#' + vidId).data('src')
				});
			})
		})
	}

	var keys = _richemontCareers.KeyCodes;
	var handler = {};
	handler[keys.LEFT] = function(){ 
		prevBtn.click();
	}
	handler[keys.RIGHT] = function(){ 
		nextBtn.click();
	}
	_richemontCareers.KeyboardAccess(container.find('.join_us_gallery'),handler);
}