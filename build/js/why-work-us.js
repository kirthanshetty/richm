function WhyworkUs(e){e.find(".join_us_gallery ul li a").click(function(e){e.preventDefault();var t=this.href,n=$(this),r=$(this).parent().parent().parent().next();$.get(t,function(e){r.html(e),n.parent().parent().find("li.active").removeClass("active"),n.parent().addClass("active")})}),$(".maison_next",e).click(function(){$(".join_us_gallery ul").find("li.active").removeClass("active").next().addClass("active").find("a").click(),$(".join_us_gallery ul li:eq(4)").attr("disabled",!0).addClass("active")}),$(".maison_prev",e).click(function(){$(".join_us_gallery ul").find("li.active").removeClass("active").prev().addClass("active").find("a").click(),$(".join_us_gallery ul li:eq(0)").attr("disabled",!0).addClass("active")})};