typeof _richemontCareers!="object"&&(_richemontCareers={}),_richemontCareers.widthElCnt=[{width:1007,elCnt:5},{width:817,elCnt:4},{width:627,elCnt:3},{width:100,elCnt:2}],_richemontCareers.prevElsInRow="",_richemontCareers.ajaxData="",_richemontCareers.MaisonBox=function(e,t){_richemontCareers.repositionItems(e),$(window).resize(function(){_richemontCareers.repositionItems(e,t)}),e.on("click",">ul li a",function(){var n=this.href,r=$(this),i=$(this).parent().parent();return e.find(">ul >li").removeClass("active"),r.parent().addClass("active"),$.get(n,function(e){_richemontCareers.ajaxData=e;var n=i.parent().find(".our_maison_gallery").parent();n.remove();var s=$(e);i.next().length<1?i.before(s):i.after(s),_richemontCareers.MaisonSlideshow(s,r,n.length<1,t)}),!1})},_richemontCareers.MaisonSlideshow=function(e,t,n,r){var i=function(t){(t.keyCode==27||t.which==27)&&e.find(".maison_close").click()};$("body").on("keypress",i),_richemontCareers.videoHandler(e),e.find(".maison_close").click(function(){return $("body").off("keypress",i),$(this).parent().parent().slideUp(function(){$(this).remove(),r(),$(".maisons_lists ul li").removeClass("lightbox-open"),$(".maisons_lists ul li a img").removeClass("listI").addClass("blur-img"),setTimeout(function(){$(".maisons_lists ul li").removeClass("fading")},1e3),$(".maisons_lists ul li").addClass("fading")}),!1}),e.find(".slides-container").css("overflow","hidden");var s=e.find(".slides"),o=e.find(".buttons a"),u=e.find(".maison_image a"),a=3,f=0;n?e.hide().slideDown(function(){r(),$(".maisons_lists ul li").addClass("lightbox-open")}):($(".maisons_lists ul li a img").addClass("listI"),r()),e.find(".maison_next").click(function(){var e=t.parent().next().find("a");return e.length<1&&(e=t.parent().parent().next().next().find("li:first a")),e.click(),!1}),e.find(".maison_prev").click(function(){var e=t.parent().prev().find("a");if(e.length<1){var n=t.parent().parent().prev();/div/i.test(n[0].tagName)&&(n=n.prev()),e=n.find("li:last a")}e.click()});var l=setInterval(function(){var e=o.parent().parent().find("li.active").next();e.length<1&&(e=o.parent().parent().find("li:first")),e.find("a").data("auto",!0).click()},5e3);o.click(function(e){e.preventDefault();if($(this).parent().hasClass("active"))return;$(this).data("auto")||clearInterval(l),$(this).data("auto",!1),$(this).parent().parent().find("li").removeClass("active"),$(this).parent().addClass("active");var t=u.filter(":visible"),n=$($(this).attr("href"));t.fadeOut(),n.fadeIn()})},_richemontCareers.repositionItems=function(e,t){var n=e.find(">ul"),r=n.find(">li"),i=_richemontCareers.getNoElsInRow(),s=$("<ul>");if(_richemontCareers.prevElsInRow==i)return;_richemontCareers.prevElsInRow=i,r.each(function(e){var t=e+1;s.append($(this)),t%i==0&&(n.eq(0).before(s),s=$("<ul>"))}),n.eq(0).before(s),n.remove();var o=e.find(".our_maison_gallery").parent();if(o.length>0){o.remove();var u=r.filter(".active").parent(),o=$(_richemontCareers.ajaxData);u.next().length>0?u.after(o):u.before(o),_richemontCareers.MaisonSlideshow(o,r.filter(".active a"),!1,t)}},_richemontCareers.getNoElsInRow=function(){var e=$(window).width();for(var t=0;t<_richemontCareers.widthElCnt.length;t++)if(e>_richemontCareers.widthElCnt[t].width)return _richemontCareers.widthElCnt[t].elCnt;return 1},_richemontCareers.videoNo=0,_richemontCareers.videoHandler=function(e){e.find('a[rel="video"]').click(function(e){e.preventDefault(),$.get($(this).attr("href"),function(e){var t=$(e);t.css({position:"fixed",top:0,left:0,height:"100%",width:"100%",background:"#000","z-index":"1000"}),t.appendTo(document.body),$("#video_content").attr("id","maison_video_content"+_richemontCareers.videoNo),videojs("maison_video_content"+_richemontCareers.videoNo++),t.find("a.video_close").click(function(e){e.preventDefault(),t.remove()})})})};