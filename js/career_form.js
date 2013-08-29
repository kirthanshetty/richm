$(function() {
 var container = $(".form_submission");
	container.delegate('.submission a', 'click' ,function(e){
		e.preventDefault();
		var link = this.href,				
			anchor = $(this),
			container = anchor.parent().parent().parent();
		$.get(link,function(data){
			container.html(data);
		});
	});
});