function Navigation(){function e(){var e=window.location.hash,t=$(e).data("parallexel");t&&t.scrollToMe()}$("header ul li a").click(function(e){e.preventDefault();var t=$(this).attr("href"),n=$(t);n.attr("id",""),window.location.hash=t,n.attr("id",t.replace(/^#/,""))}),window.onhashchange=e,setTimeout(function(){e()},250),$(".search").mouseover(function(){$(".search_block").show(),$(".search_block").find("input:text").focus()});var t;$(".search_block").find("input:text").blur(function(){$(".search_block").hide()}),$(".collapsed").mouseover(function(){$(".menu_list").show()}),$(".collapsed").mouseout(function(){$(".menu_list").hide()}),$(".scroll_top img").click(function(){return $("html, body").animate({scrollTop:0},"slow"),!1})};