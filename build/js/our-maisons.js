function MaisonBox(e,t){e.find(">ul li a").click(function(){var e=this.href,n=$(this),r=$(this).parent().parent();return $.get(e,function(e){var i=r.parent().find(".our_maison_gallery").parent();i.remove();var s=$(e);r.next().length<1?r.before(s):r.after(s),MaisonSildeshow(s,n,i.length<1,t)}),!1})}function MaisonSildeshow(e,t,n,r){var i=function(t){(t.keyCode==27||t.which==27)&&e.find(".maison_close").click()};$("body").on("keypress",i),e.find(".maison_close").click(function(){return $("body").off("keypress",i),$(this).parent().parent().slideUp(function(){$(this).remove(),r(),$(".maisons_lists ul li").removeClass("lightbox-open"),$(".maisons_lists ul li a img").removeClass("listI").addClass("blur-img")}),!1});var s=e.find(".maison_main_content:eq(0)").outerWidth();e.find(".slides-container").width(s).css("overflow","hidden"),e.find(".maison_main_content").width(s-120);var o=e.find(".slides").width(s*3),u=e.find(".buttons"),a=3,f=0;n?e.hide().slideDown(function(){r(),$(".maisons_lists ul li").addClass("lightbox-open")}):($(".maisons_lists ul li a img").addClass("listI"),r()),e.find(".maison_next").click(function(){var e=t.parent().next().find("a");return e.length<1&&(e=t.parent().parent().next().next().find("li:first a")),e.click(),!1}),e.find(".maison_prev").click(function(){var e=t.parent().prev().find("a");return e.length<1&&(e=t.parent().parent().prev().find("li:first a")),e.click(),!1})};