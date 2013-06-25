/**
 * Parallax Scrolling Tutorial
 * For NetTuts+
 *  
 * Author: Mohiuddin Parekh
 *  http://www.mohi.me
 *  @mohiuddinparekh   
 */


$(document).ready(function(){
  var winH = $(window).height(),
      headerH = $('header').height(),
      cont = $('.container.main'),
      pageH = winH - headerH,
      top = 0,
      contTop = cont.position().top;


  $('.page').each(function(i,page){
    var $page = $(page),
        curPageH = $page.height(),
        pageHCompensation = pageH - curPageH,
        curTop = top;
    if(pageHCompensation > 0)
    $page.css({
      'padding-top': pageHCompensation / 2,
      'padding-bottom': pageHCompensation / 2
    })
    console.log(top)
    $page.css({
      top: top
    });

    var myPosTop = top + headerH;

    top += pageH;
    if(pageHCompensation < 0) top -= pageHCompensation;

    cont.height(top);
    var myPosBottom = top + contTop - pageH - 102;

    var foregroundEls = $page.find('[data-type="foreground"]');
    foregroundEls.css('position','relative');

    $(window).scroll(function(){
      var st = $(window).scrollTop();
      if(st > myPosBottom) {
        var addTop = (st - myPosBottom) / $page.data('speed');
        $page.css('top',curTop + addTop)
      }

      var posDelta = myPosTop - st;


      foregroundEls.each(function(i,fel){
        var ftop = posDelta / $(fel).data('bgspeed');

        $(fel).css('top',ftop);

      })

    })
    
  })

  $window = $(window);
                
  $('section[data-type="background"]').each(function(){
    var $bgobj = $(this); // assigning the object
    $(window).scroll(function() {
      // Scroll the background at var speed
      // the yPos is a negative value because we're scrolling it UP!                              
      var yPos = -($window.scrollTop() / $bgobj.data('bgspeed')); 
      
      // Put together our final background position
      var coords = '50% '+ yPos + 'px';

      // Move the background
      $bgobj.css({ backgroundPosition: coords });
      
    }); // window scroll Ends
  });

  /* Script of Search block Pop-Up */
  $(".search").mouseover(function(){
    $(".search_block").show();
  });
  $(".search").mouseout(function(){
    $(".search_block").hide();
  });
  $(".maisons_lists >ul li a").hover(function(){
    $(this).css('background','url("../img/overlay.jpg") no-repeat scroll left top transparent');
  },function(){
    $(this).css('background','#00436E');
  });
  
  /* Script of Click scroll to Top */
  $(".scroll_top img").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });


  $(".maisons_lists ul li a").click(function(){
    var anchor = $(this),
        listItem = $(this).parent(),
        myDetail = listItem.parent().parent().find('.our_maison_gallery');
    
    function loadDetails(){
      var url = anchor.attr('href');
      $.get(url,function(data,status,xhr){
        var $data = $(xhr.responseText).hide();
        listItem.parent().after($data);
        MaisonSildeshow($data);
      })
    }

    if(myDetail.length > 0)
      myDetail.slideUp(function(){
        $(this).remove();
        loadDetails()
      });
    else
      loadDetails();
    return false;
  });

MaisonSildeshow($('.our_maison_gallery'))

});


function MaisonSildeshow(gallery){
  gallery.hide().slideDown();
  gallery.find('.maison_close').click(function(){
    $(this).parent().slideUp(function(){
      $(this).remove();
    })
    return false;
  });
  var w = gallery.find('.maison_main_content:eq(0)').width()
  gallery.find('.slides-container').width(w);
  gallery.find('.slides').width(w*3);
}