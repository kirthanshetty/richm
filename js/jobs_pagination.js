// -----------------------------------------------------------------
//                        REQUIREJS MODULE
require(['jquery'],function(){
// -----------------------------------------------------------------
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
	$('#unsubscribe').click(function(){
		$("body").css({'overflow':'hidden'});
		$('.job_dialog, .job_dialog .delete').show();
		var content = $('.job_dialog .delete .content:first').show();
		$('.job_dialog .delete .header h3:gt(0)').hide();
		var content = $('.job_dialog .delete .content:first').show();
		content.find('form').submit(function(e){
			e.preventDefault();
			var emailVal = $(this).find('#email').val();
			if(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/.test(emailVal.toUpperCase())){
				content.hide().next().show();
			}else{
				$(this).find('#email').parent().addClass('error');
			}
			return false;
		})
		$('body').append('<div class="overlay"></div>');
	});
	$('#job_alert').click(function(){
		$("body").css({'overflow':'hidden'});
		$('.job_dialog, .job_dialog .activate').show();
		$('.job_dialog .activate .content').hide();
		var content = $('.job_dialog .activate .content:first').show();
		content.find('form').submit(function(e){
			e.preventDefault();
			var emailVal = $(this).find('#email').val();
			if(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/.test(emailVal.toUpperCase())){
				content.hide().next().show();
			}else{
				$(this).find('#email').parent().addClass('error');
			}
			return false;
		})

		content.find('form #email').val('').parent().removeClass('error');
		content.find('form input:radio:gt(0)').attr('checked',false)
		content.find('form input:radio:first').trigger('click');

		$('body').append('<div class="overlay"></div>');
	});
	$('.close_alert').click(function(){
		$("body").css({'overflow':'auto'});
		$('.job_dialog, .job_dialog .section_left').hide();
		$('.overlay').remove();
	})
});
// -----------------------------------------------------------------
});
// -----------------------------------------------------------------

