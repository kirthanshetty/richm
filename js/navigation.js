function Navigation(){

	$('a[href|=\#]').click(function(e){
		e.preventDefault();
		window.location.hash = this.href;
	})

	var id = window.location.hash;
	console.log(id)
	var parallex = $(id).data('parallexel');
	parallex.scrollToMe();

	window.onhashchange = function(){
		var id = window.location.hash;
		var parallex = $(id).data('parallexel');
		parallex.scrollToMe();
	}
}
