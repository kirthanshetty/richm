typeof _richemontCareers!="object"&&(_richemontCareers={}),_richemontCareers.Navigation=function(){function t(){var e=window.location.hash,t=$(e).data("parallexel");t&&t.scrollToMe()}function r(){if($(window).width()<630&&(!n||n>=630)){$(".collapsed").mouseover(function(){$(".collapsed .header_right").addClass("menu_list"),$(".menu_list").show()}).find("nav ul li").click(function(){$(".menu_list").hide()}),$(".collapsed").mouseout(function(){$(".collapsed .menu_list").hide()});if(navigator.userAgent.match(/(iPhone|iPod)/i)){var e=$("div.collapsed .header_right");$(".collapsed").click(function(){e.toggle(20)}),$(".collapsed ul li a").on("touchend",function(){var t=$(this),n=t.attr("href");window.location=n,e.toggle()}),$(".container").click(function(){e.hide()})}}$(window).width()>=630&&(!n||n<630)&&($(".header_right").removeClass("menu_list").show(),$(".collapsed .header_right ul:eq(1)").addClass("second_row"),$(".collapsed").unbind("mouseover"),$(".collapsed").unbind("mouseout")),n=$(window).width()}var e=function(e){if($(window).width()<1024)return;var t=this.href,n=window.location.href.replace(/#.*$/,"");t=t.replace(n,""),t.match(/^#/)&&e.preventDefault();var r=$(this).attr("href"),i=$(r);window.location.hash="dummy",i.attr("id",""),window.location.hash=r,i.attr("id",r.replace(/^#/,""))};$(".header_main a").click(e),window.onhashchange=t,setTimeout(function(){t()},250),$(window).resize(r),$(window).load(r),r();var n;$(".scroll_top img").click(function(){return $("html, body").animate({scrollTop:0},"slow"),!1}),$("a.scroll_down").click(e),Modernizr.touch&&$(".note p").show()};