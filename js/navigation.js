if (typeof (_richemontCareers) != 'object') {
    _richemontCareers = {};
}

_richemontCareers.Navigation = function () {

    var checkAndGotoHref = function (e) {
        if ($(window).width() < 1024) {
            return;
        }
        var href = this.href;
        var winhref = window.location.href.replace(/#.*$/, '');
        href = href.replace(winhref, '');

        if (href.match(/^#/))
            e.preventDefault();
        var hash = $(this).attr('href');
        var node = $(hash);

        window.location.hash = 'dummy'; // Change to non-existant hash to make sure scroll and click still works :)
    node.attr('id', '');
    window.location.hash = hash;
    node.attr('id', hash.replace(/^#/, ''));
}

$('.header_main a').click(checkAndGotoHref)
window.onhashchange = navigate;
setTimeout(function () {
    navigate();
}, 250);

function navigate() {
    var id = window.location.hash;
    var parallex = $(id).data('parallexel');
    if (parallex)
        parallex.scrollToMe();
}

$(window).resize(fixnav)
$(window).load(fixnav)
fixnav();
var prevWidth;

function fixnav() {

    if ($(window).width() < 630 && (!prevWidth || prevWidth >= 630)) {

        if( navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) ||navigator.userAgent.match(/iPad/i) )
        {
            var mobileNav = $("div.collapsed .header_right")    ;
            console.log(mobileNav);
            console.log(mobileNav.is(':hidden'));
            var toggleMobileNav = function(){
                console.log(mobileNav.is(':hidden'));
                
                if(mobileNav.is(':hidden')){
                    mobileNav.show();
                    $('.collapsed').addClass('mobile-hover');
                } else {
                    mobileNav.hide();
                    $('.collapsed').removeClass('mobile-hover');
                }
            }

            $('.collapsed').click(function (e) {
                e.stopPropagation();
                toggleMobileNav();
            });

            $('.collapsed ul li a').on('touchend', function () {
                var el = $(this);
                var link = el.attr('href');
                window.location = link;
                toggleMobileNav();
            });
        }
        else {
            $(".collapsed .header_right").hide();
            $(".collapsed").mouseover(function () {
              $(".collapsed .header_right").addClass('menu_list');
                    //  $(".collapsed .header_right ul").removeClass('second_row');
                    $(".menu_list").show();
                    $(this).css({'background-position':'3px -960px','background-color':'#e7e7e7'});
                }).find('nav ul li').click(function(){
                  $(".menu_list").hide();
              });

                $(".collapsed").mouseout(function () {
                   $(".collapsed .menu_list").hide();
                   $(this).css({'background-position':'3px -907px','background-color':'#00436e'});
               });
            }

        $(".container").click(function () {
           mobileNav.hide();
           $('.collapsed').removeClass('mobile-hover');
        });
}

       /*  if (navigator.userAgent.match(/(iPhone|iPod)/i))  {
            $("p.note").css('display','block')
        } */

        if ($(window).width() >= 630 && (!prevWidth || prevWidth < 630)) {
            $(".header_right").removeClass('menu_list').show();
            $(".collapsed .header_right ul:eq(1)").addClass('second_row');
            $(".collapsed").unbind('mouseover');
            $(".collapsed").unbind('mouseout');
        }
        prevWidth = $(window).width();
    }
    /* Script of Click scroll to Top */
    $(".scroll_top img").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    /* jQuery to add effect to Home page Chevron */
    $("a.scroll_down").click(checkAndGotoHref);

    if(Modernizr.touch) {
        $(".note p").show();
    }
}