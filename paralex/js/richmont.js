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
        var ftop = posDelta / $(fel).data('speed');

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
   
  $(".search").mouseover(function(){
    $(".search_block").show();
  });
  $(".search").mouseout(function(){
    $(".search_block").hide();
  });
}); 

