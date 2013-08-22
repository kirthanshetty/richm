$(function() {
 var container = $(".search_results");
	container.find('.pagination ul li a').click(function(e){
		e.preventDefault();
		var link = this.href,				
			anchor = $(this),
			container = $(this).parent().parent().parent().prev();
		$.get(link,function(data){
			container.html(data);
			anchor.parent().parent().find('li.active').removeClass('active');
			anchor.parent().addClass('active');
		});
	});
});