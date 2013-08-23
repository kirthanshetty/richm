$(function() {
 var container = $(".search_results");
	container.find('.pagination ul li a').click(function(e){
		e.preventDefault();
		var link = this.href,				
			anchor = $(this),
			container = anchor.parent().parent().parent().prev();
		$.get(link,function(data){
			container.html(data);
		});
	});
});