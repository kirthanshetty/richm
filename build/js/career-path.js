typeof _richemontCareers!="object"&&(_richemontCareers={}),_richemontCareers.CareerPath=function(e){e.find(".career_gallery ul li a").click(function(e){e.preventDefault();var t=this.href,n=$(this),r=$(this).parent().parent().parent().parent().parent().next();$.get(t,function(e){r.html(e),n.parent().parent().find("li.active").removeClass("active"),n.parent().addClass("active"),$(".tab_content_left select").customSelect()})});var t=$(".career_gallery ul li").width(),n=$(".career_gallery_container ul li").length,r=t*n,i=$(".career_gallery_container").width("100%").css("overflow","hidden").width(),s=$(".career_gallery_container .slides").width(r),o=0,u=$(".career_gallery a.next").click(function(){o+=t,o>r-i&&(o=r-i);var n=e.find(".career_gallery ul li.active").next();n.length<1&&(o=0,n=e.find(".career_gallery ul li:first")),n.find("a").click(),s.animate({"margin-left":-1*o})}),a=$(".career_gallery a.prev").click(function(){o-=t,o<0&&(o=0);var n=e.find(".career_gallery ul li.active").prev();n.length<1&&(o=r-i,n=e.find(".career_gallery ul li:last")),n.find("a").click(),s.animate({"margin-left":-1*o})});i>=r&&(u.hide(),a.hide());var f=_richemontCareers.KeyCodes,l={};l[f.LEFT]=function(){a.click()},l[f.RIGHT]=function(){u.click()},_richemontCareers.KeyboardAccess(e.find(".career_gallery"),l)};