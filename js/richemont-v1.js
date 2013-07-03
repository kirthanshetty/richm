function MaisonBox(container,callback){
	container.find('>ul li a').click(function(){
		var link = this.href,
			anchor = $(this),
			listCont = $(this).parent().parent();
			$('.maisons_lists ul li a').css({'background':'#1f1f1f','border-color':'#414141'})
			$('.maisons_lists ul li a img').css({'opacity':'0.2'})

		$.get(link,function(data){
			listCont.parent().find('.our_maison_gallery').parent().remove();
			var $responseEl = $(data);
			if(listCont.next().length < 1){
				listCont.prepend($responseEl)
			}else{
				listCont.append($responseEl)
			}
			MaisonSildeshow($responseEl,anchor)
			callback();
		});
		return false;
	})
	
}

function MaisonSildeshow(gallery,anchorel){
  gallery.find('.maison_close').click(function(){
    $(this).parent().parent().slideUp(function(){
      $(this).remove();
      $('.maisons_lists ul li a').css({'background':'#00436E','border-color':'#B8B8B8'})
	  $('.maisons_lists ul li a img').css({'opacity':'1'})
    })
    return false;
  });
  var w = gallery.find('.maison_main_content:eq(0)').outerWidth()
  gallery.find('.slides-container').width(w).css('overflow','hidden');
  gallery.find('.maison_main_content').width(w - 120);
  var slides = gallery.find('.slides').width(w*3);
  var buttons = gallery.find('.buttons');
  
  var noSlides = 3,
      curSlide = 0;

  gallery.hide().slideDown();
  
  gallery.find('.maison_next').click(function(){
    var nextEl = anchorel.parent().next().find('a');
    if(nextEl.length < 1){
      nextEl = anchorel.parent().parent().next().next().find('li:first a');
    }
    console.log(anchorel,nextEl);
    nextEl.click();
    return false;
  })  

  gallery.find('.maison_prev').click(function(){
    var nextEl = anchorel.parent().prev().find('a');
    if(nextEl.length < 1){
      nextEl = anchorel.parent().parent().prev().find('li:first a');
    }
    console.log(anchorel,nextEl);
    nextEl.click();
    return false;
  }) 

}

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
}
function CareerPath(container){
	container.find('.career_gallery ul li a').click(function(e){
		e.preventDefault();
		var link = this.href,				
			anchor = $(this),
			container = $(this).parent().parent().parent().parent().parent().next();
		$.get(link,function(data){
			container.html(data);
			anchor.parent().parent().find('li.active').removeClass('active');
			anchor.parent().addClass('active');
		});
	})
}



$(function(){
	var maisons = MaisonBox($('.maisons_lists'),function(){})
	var WorkUs = WhyworkUs($('.page_4 .section_main'))
	var Career = CareerPath($('.page_5 .inner_content'))
})


$(function(){
	var wd = $(".gallery_container").find('.content:eq(0)').outerWidth()

	$(".gallery_container").width(wd).css('overflow','hidden');
	$(".gallery_container .content").width(wd);
	var slides = $(".gallery_container").find('.slides').width(wd*3);
	$('.our_world h1').css('padding-left','3px');
	var ulList = $('.gallery_join .our_world ul.buttons');
	var nextEl = $('.gallery_join .our_world a.next');
	var prevEl = $('.gallery_join .our_world a.prev');
	var noSlides = $('.gallery_join .our_world ul.buttons li a').length,
	      curSlide = 0;

	var changeSlide = function(direction){
		activeDot = ulList.find('li.active');
		if(direction == "next"){
			if(curSlide >= noSlides-1){ return false;}
			curSlide ++;
			activeDot.removeClass('active');
			activeDot.next().addClass('active');
		}else if(direction == "prev"){
			if(curSlide <= 0){ return false;}
			curSlide --;
			activeDot.removeClass('active');
			activeDot.prev().addClass('active');
		}else{
			curSlide = direction;
			activeDot.removeClass('active');
			ulList.find('li').eq(direction).addClass('active');
		}
				
		if(curSlide >= noSlides-1){
			nextEl.addClass('inactive');
			prevEl.removeClass('inactive');
		}else if(curSlide <= 0){
			prevEl.addClass('inactive');
			nextEl.removeClass('inactive');
		}else{
			nextEl.removeClass('inactive');
			prevEl.removeClass('inactive');
		}

		slides.animate({'margin-left': -1 * wd * curSlide });
	}

	$('.gallery_join .our_world a.next').click(function(){
		changeSlide('next');
	 });
	$('.gallery_join .our_world a.prev').click(function(){
		changeSlide('prev');
	 });
	$('.gallery_join .our_world ul.buttons li a').click(function(e){
		e.preventDefault();
		changeSlide($(this).parent().index());
	});
});


$(function(){
	var wdt = $('.career_gallery ul li').width()
	var cnt = $('.career_gallery_container ul li').length
	$('.career_gallery_container').width(wdt*5).css('overflow','hidden');
	var slides = $('.career_gallery_container .slides').width(wdt*cnt);
	var noSlides = cnt - 4,
	      curSlide = 0;

	$('.career_gallery a.next').click(function(){
	  curSlide ++;
	  if(curSlide >= noSlides) curSlide = 0;
	  slides.animate({'margin-left': -1 * wdt * curSlide });
	});
	$('.career_gallery a.prev').click(function(){
	  curSlide --;
	  if(curSlide < 0) curSlide = noSlides - 1;
	  slides.animate({'margin-left': -1 * wdt * curSlide });
	});
});

$(function(){
	$(".maison_next").click(function(){
		$(".join_us_gallery ul").find('li.active').removeClass('active').next().addClass('active').find('a').click();
		$(".join_us_gallery ul li:eq(4)").attr('disabled', true).addClass('active');
	});
	$(".maison_prev").click(function(){
    	$(".join_us_gallery ul").find('li.active').removeClass('active').prev().addClass('active').find('a').click();
    	$(".join_us_gallery ul li:eq(0)").attr('disabled', true).addClass('active');
	});
});


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


  $(window).scroll(function() {

  var scroll_ok = true;
setInterval(function () {

    scroll_ok = true;
}, 500);//33ms is 30fps, you can try changing this to something larger for better performance
$(window).bind('scroll', function () {
    if (scroll_ok === true) {
        scroll_ok = false;
        //now run your code to animate with respect to scroll
    }
});
});
