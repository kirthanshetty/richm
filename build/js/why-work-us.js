function WhyworkUs(e){function o(e){e.find('a[rel="video"]').click(function(e){e.preventDefault(),$.get($(this).attr("href"),function(e){var t=$(e);t.css({position:"fixed",top:0,left:0,height:"100%",width:"100%",background:"#000","z-index":"1000"}),t.appendTo(document.body),$("#video_content").attr("id","video_content"+videoNo),videojs("video_content"+videoNo++),t.find("a.video_close").click(function(e){e.preventDefault(),t.remove()})})})}var t=e.find(".join_us_gallery ul li a"),n=e.find(".head_cont"),r=e.find(".main_cont"),i=e.find(".maison_prev"),s=e.find(".maison_next");t.each(function(e,t){$(t).data("idx",e)}),n.width(t.length*100+"%"),n.find(".bg_img").width(100/t.length+"%"),t.click(function(e){e.preventDefault();var t=$(this);$.get($(this).attr("href"),function(e){t.parent().parent().find("li").removeClass("active"),t.parent().addClass("active");var i=$(e),s=i.find(".main_cont"),u="-"+100*t.data("idx")+"%";n.animate({"margin-left":u}),r.after(s),r.hide(),r=s,o(s)})}),o(r),i.click(function(){t.parent().parent().find("li.active").prev().find("a").click()}),s.click(function(){t.parent().parent().find("li.active").next().find("a").click()})}var videoNo=1;