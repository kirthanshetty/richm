require(["jquery"],function(){$(function(){var e=$(".search_results");e.delegate(".pagination ul li a","click",function(e){e.preventDefault();var t=this.href,n=$(this),r=n.parent().parent().parent().parent();$.get(t,function(e){r.html(e)})}),$("#unsubscribe").click(function(){$(".job_dialog, .job_dialog .delete").show();var e=$(".job_dialog .delete .content:first").show();$(".job_dialog .delete .header h3:gt(0)").hide(),$("body").append('<div class="overlay"></div>')}),$("#job_alert").click(function(){$(".job_dialog, .job_dialog .activate").show(),$(".job_dialog .activate .content").hide();var e=$(".job_dialog .activate .content:first").show();e.find("form").submit(function(t){t.preventDefault();var n=$(this).find("#email").val();return/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/.test(n.toUpperCase())?e.hide().next().show():$(this).find("#email").parent().addClass("error"),!1}),e.find("form #email").val("").parent().removeClass("error"),e.find("form input:radio:gt(0)").attr("checked",!1),e.find("form input:radio:first").trigger("click"),$("body").append('<div class="overlay"></div>')}),$(".close_alert").click(function(){$(".job_dialog, .job_dialog .section_left").hide(),$(".overlay").remove()})})});