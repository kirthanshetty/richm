$(function(){
	$('.social_links a').each(function(){
		var oldHref = this.href;
		$(this).attr('href', oldHref.replace(/\{\{url\}\}/,window.location));
	})
})