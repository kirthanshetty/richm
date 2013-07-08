function MaisonBox(container, callback) {
    container.find('>ul li a').click(function () {
        var link = this.href,
            anchor = $(this),
            listCont = $(this).parent().parent();


        $.get(link, function (data) {
            var oldMaison = listCont.parent().find('.our_maison_gallery').parent();
            oldMaison.remove();
            var $responseEl = $(data);
            if (listCont.next().length < 1) {
                listCont.before($responseEl)
            } else {
                listCont.after($responseEl)
            }
            MaisonSildeshow($responseEl, anchor, oldMaison.length < 1,callback)
        });
        return false;
    })

}

function MaisonSildeshow(gallery, anchorel,animate,callback) {
    var escHandler = function(e){
        if(e.keyCode == 27 || e.which == 27){
            gallery.find('.maison_close').click();
        }
    }

    $('body').on('keypress',escHandler);

    gallery.find('.maison_close').click(function () {
        $('body').off('keypress',escHandler);
        
        $(this).parent().parent().slideUp(function () {
            $(this).remove();
            callback();
            $('.maisons_lists ul li').removeClass('lightbox-open');
            $('.maisons_lists ul li a img').removeClass('listI').addClass('blur-img');
        })
        return false;
    });

    var w = gallery.find('.maison_main_content:eq(0)').outerWidth()
    gallery.find('.slides-container').width(w).css('overflow', 'hidden');
    gallery.find('.maison_main_content').width(w - 120);
    var slides = gallery.find('.slides').width(w * 3);
    var buttons = gallery.find('.buttons');

    var noSlides = 3,
        curSlide = 0;
    
    if (animate) {
        gallery.hide().slideDown(function(){
            callback();   
            $('.maisons_lists ul li').addClass('lightbox-open');         
        });
    }else{
        $('.maisons_lists ul li a img').addClass('listI');
        callback();
    }

    gallery.find('.maison_next').click(function () {
        var nextEl = anchorel.parent().next().find('a');
        if (nextEl.length < 1) {
            nextEl = anchorel.parent().parent().next().next().find('li:first a');
        }
        nextEl.click();
        return false;
    })

    gallery.find('.maison_prev').click(function () {
        var nextEl = anchorel.parent().prev().find('a');
        if (nextEl.length < 1) {
            nextEl = anchorel.parent().parent().prev().find('li:first a');
        }
        nextEl.click();
        return false;
    })
}