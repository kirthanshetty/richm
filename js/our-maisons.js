var widthElCnt  = [
    { width: 1007, elCnt: 5 },
    { width: 817, elCnt: 4 },
    { width: 627, elCnt: 3 },
    { width: 100, elCnt: 2 }
]

var prevElsInRow, ajaxData;

function MaisonBox(container, callback) {
    repositionItems(container);
    $(window).resize(function(){ repositionItems(container,callback); });

    container.on('click', '>ul li a', function () {
        var link = this.href,
            anchor = $(this),
            listCont = $(this).parent().parent();

        container.find('>ul >li').removeClass('active');
        anchor.parent().addClass('active');

        $.get(link, function (data) {
            ajaxData = data;
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
            setTimeout(function() {
                $('.maisons_lists ul li').removeClass('fading');
            }, 1000);
            $('.maisons_lists ul li').addClass('fading');
        })

        return false;
    });

    // var w = gallery.find('.maison_main_content:eq(0)').outerWidth()
    gallery.find('.slides-container').//width(w).
        css('overflow', 'hidden');
    // gallery.find('.maison_main_content').width(w - 120);
    var slides = gallery.find('.slides') //.width(w * 3);
    var buttons = gallery.find('.buttons a'),
        maisonImages = gallery.find('.maison_image a');

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
        var prevEl = anchorel.parent().prev().find('a');
        if (prevEl.length < 1) {
            var prevParent = anchorel.parent().parent().prev();
            if(/div/i.test(prevParent[0].tagName))
                prevParent = prevParent.prev();
            prevEl = prevParent.find('li:last a');
        }
        prevEl.click();
        return false;
    })

    var timer = setInterval(function(){
        var nextBtn = buttons.parent().parent().find('li.active').next();
        if(nextBtn.length < 1) nextBtn = buttons.parent().parent().find('li:first');
        nextBtn.find('a').data('auto',true).click();
    },2000)

    buttons.click(function(e){
        e.preventDefault();
        if($(this).parent().hasClass('active')) return;

        if(!$(this).data('auto')){
            clearInterval(timer);
        }
        $(this).data('auto',false);


        $(this).parent().parent().find('li').removeClass('active');
        $(this).parent().addClass('active');

        var prev = maisonImages.filter(':visible'),
            cur = $($(this).attr('href'));

        prev.fadeOut();
        cur.fadeIn();
    })

}

function repositionItems(container,callback){
    var list = container.find('>ul'),
        listEls = list.find('>li'),
        noElsInRow = getNoElsInRow(),
        curList = $('<ul>');
    
    if(prevElsInRow == noElsInRow) return;
    prevElsInRow = noElsInRow;

    listEls.each(function(i){
        var elNo = i + 1;
        curList.append($(this));
        if(elNo % noElsInRow == 0){
            list.eq(0).before(curList)
            curList = $('<ul>');
        }
    });
    list.eq(0).before(curList)

    list.remove();
    var lightbox = container.find('.our_maison_gallery').parent();
    if(lightbox.length > 0){
        lightbox.remove();
        var listCont = listEls.filter('.active').parent(),
            lightbox = $(ajaxData);
        if(listCont.next().length > 0){
            listCont.after(lightbox);
        }else{
            listCont.before(lightbox);
        }
        MaisonSildeshow(lightbox,listEls.filter('.active a'),false,callback)
    }
}

function getNoElsInRow(){
    var w = $(window).width();
    for (var i = 0; i < widthElCnt.length; i++) {
        if(w > widthElCnt[i].width){
            return widthElCnt[i].elCnt;
        }
    };
    return 1;
}