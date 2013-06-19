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

    top += pageH;
    if(pageHCompensation < 0) top -= pageHCompensation;

    cont.height(top);
    var myPosBottom = top + contTop - pageH - 12;

    $(window).scroll(function(){
      var st = $(window).scrollTop();
      if(st > myPosBottom) {
        var addTop = (st - myPosBottom) / $page.data('speed');
        $page.css('top',curTop + addTop)
      }
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
   var $page_content = $(".page .inner_content");
    // $page = pageHCompensation + $page_content;

    if($page_content > 0)
      {
        $page_content.css({
        'padding-top': curPageH
        })
      }
      alert(curPageH);


  $(".search").mouseover(function(){
    $(".search_block").show();
  });
  $(".search").mouseout(function(){
    $(".search_block").hide();
  });
}); 

