$(function() {
 var container = $(".search_results");
	container.delegate('.pagination ul li a', 'click' ,function(e){
		e.preventDefault();
		var link = this.href,				
			anchor = $(this),
			container = anchor.parent().parent().parent().parent();
		$.get(link,function(data){
			container.html(data);
		});
	});
});

