typeof _richemontCareers!="object"&&(_richemontCareers={}),_richemontCareers.WhyworkUs=function(e){function u(e){e.find('a[rel="video"]').click(function(e){e.preventDefault(),$.get($(this).attr("href"),function(e){var t=$(e);t.css({position:"fixed",top:0,left:0,height:"100%",width:"100%",background:"#000","z-index":"1000"}),t.appendTo(document.body),$("#video_content").attr("id","video_content"+o),videojs("video_content"+o++),t.find("a.video_close").click(function(e){e.preventDefault(),t.remove()})})})}var t=e.find(".join_us_gallery ul li a"),n=e.find(".head_cont"),r=e.find(".main_cont"),i=e.find(".maison_prev"),s=e.find(".maison_next"),o=1;t.each(function(e,t){$(t).data("idx",e)}),n.width(t.length*100+"%"),n.find(".bg_img").width(100/t.length+"%"),t.click(function(e){e.preventDefault();var t=$(this);$.get($(this).attr("href"),function(e){t.parent().parent().parent().find("li").removeClass("active"),t.parent().parent().addClass("active");var i=$(e),s=i.find(".main_cont"),o="-"+100*t.data("idx")+"%";n.animate({"margin-left":o}),r.after(s),r.hide(),r=s,u(s)})}),u(r),i.click(function(){t.parent().parent().parent().find("li.active").prev().find("a").click()}),s.click(function(){console.log("here"),t.parent().parent().parent().find("li.active").next().find("a").click()});var a=_richemontCareers.KeyCodes,f={};f[a.LEFT]=function(){i.click()},f[a.RIGHT]=function(){s.click()},_richemontCareers.KeyboardAccess(e,f)};