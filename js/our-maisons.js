if (typeof (_richemontCareers) != 'object') {
    _richemontCareers = {};
}

_richemontCareers.widthElCnt = [{
    width: 1007,
    elCnt: 5
}, {
    width: 817,
    elCnt: 4
}, {
    width: 627,
    elCnt: 3
}, {
    width: 100,
    elCnt: 2
}]

_richemontCareers.prevElsInRow = '';
_richemontCareers.ajaxData = '';

_richemontCareers.MaisonBox = function (container, callback) {
    _richemontCareers.repositionItems(container);
    $(window).resize(function () {
        _richemontCareers.repositionItems(container, callback);
    });

    container.on('click', '>ul li a.two', function () {
        var link = this.href,
            anchor = $(this),
            listCont = $(this).parent().parent();

        container.find('>ul >li').removeClass('active');
        anchor.parent().addClass('active');

        $.get(link, function (data) {
            _richemontCareers.ajaxData = data;
            var oldMaison = listCont.parent().find('.our_maison_gallery').parent();
            oldMaison.remove();
            var $responseEl = $(data);
            if (listCont.next().length < 1) {
                listCont.before($responseEl)
            } else {
                listCont.after($responseEl)
            }
            $responseEl.closest('section.page').height(function(i,oldHeight){ return oldHeight + $responseEl.height(); });
            callback();
            _richemontCareers.MaisonSlideshow($responseEl, anchor, oldMaison.length < 1, callback)
        });
        return false;
    })

}
_richemontCareers.MaisonSlideshow = function (gallery, anchorel, animate, callback) {
    var top = gallery.offset().top;
    $('html,body').animate({'scrollTop':(top - 190) });
    _richemontCareers.videoHandler(gallery);

    gallery.find('.maison_close').click(function () {
        $(this).parent().parent().slideUp(function () {
            $(this).closest('section.page').height('')
            $(this).remove();

            callback();
            $('.maisons_lists ul li').removeClass('lightbox-open');
            $('.maisons_lists ul li a img').removeClass('listI').addClass('blur-img');
            setTimeout(function () {
                $('.maisons_lists ul li').removeClass('fading');
            }, 1000);

            if (Modernizr.touch) {
                setTimeout(function () {
                    $('.maisons_lists ul li').removeClass('fading');
                }, 2000);
            }

            $('.maisons_lists ul li').addClass('fading');
        })

        return false;
    });



    // var w = gallery.find('.maison_main_content:eq(0)').outerWidth()
    gallery.find('.slides-container'). //width(w).
    css('overflow', 'hidden');
    // gallery.find('.maison_main_content').width(w - 120);
    var slides = gallery.find('.slides') //.width(w * 3);
    var buttons = gallery.find('.buttons a'),
        maisonImages = gallery.find('.maison_image a');

    var noSlides = 3,
        curSlide = 0;

    if (animate) {
        gallery.hide().slideDown(function () {
            callback();
            $('.maisons_lists ul li').addClass('lightbox-open');
        });
    } else {
        $('.maisons_lists ul li a img').addClass('listI');
        callback();
    }

    var nextEl = anchorel.parent().next().find('a');
    if (nextEl.length < 1) {
        nextEl = anchorel.parent().parent().next().next().find('li:first a');
    }

    var prevEl = anchorel.parent().prev().find('a');
    if (prevEl.length < 1) {
        var prevParent = anchorel.parent().parent().prev();
        if (prevParent.length > 0 && /div/i.test(prevParent[0].tagName))
            prevParent = prevParent.prev();
        prevEl = prevParent.find('li:last a');
    }
    if (prevEl.length < 1) {
        gallery.find('.maison_prev').hide();
    }
    if (nextEl.length < 1 || !nextEl.hasClass('two'))
        gallery.find('.maison_next').hide();
    var nextBtn = gallery.find('.maison_next').click(function () {
        nextEl.click();
        return false;
    })

    var prevBtn = gallery.find('.maison_prev').click(function () {
        prevEl.click();
        return false;
    })

    var keys = _richemontCareers.KeyCodes;
    var handler = {};
    handler[keys.LEFT] = function () {
        prevBtn.click();
    }
    handler[keys.RIGHT] = function () {
        nextBtn.click();
    }
    handler[keys.ESCAPE] = function () {
        gallery.find('.maison_close').click();
    }
    _richemontCareers.KeyboardAccess(gallery, handler);

    var timer = setInterval(function () {
        var nextBtn = buttons.parent().parent().find('li.active').next();
        if (nextBtn.length < 1) nextBtn = buttons.parent().parent().find('li:first');
        nextBtn.find('a').data('auto', true).click();
    }, 5000)

    buttons.click(function (e) {
        e.preventDefault();
        if ($(this).parent().hasClass('active')) return;

        if (!$(this).data('auto')) {
            clearInterval(timer);
        }
        $(this).data('auto', false);


        $(this).parent().parent().find('li').removeClass('active');
        $(this).parent().addClass('active');

        var prev = maisonImages.filter(':visible'),
            cur = $($(this).attr('href'));

        prev.fadeOut();
        cur.fadeIn();
    })
    maisonImages.filter(':gt(0)').hide();

    gallery.click();
}

_richemontCareers.repositionItems = function (container, callback) {
    var list = container.find('>ul'),
        listEls = list.find('>li'),
        noElsInRow = _richemontCareers.getNoElsInRow(),
        curList = $('<ul>');

    if (_richemontCareers.prevElsInRow == noElsInRow) return;
    _richemontCareers.prevElsInRow = noElsInRow;

    listEls.each(function (i) {
        var elNo = i + 1;
        curList.append($(this));
        if (elNo % noElsInRow == 0) {
            list.eq(0).before(curList)
            curList = $('<ul>');
        }

        if($(this).hasClass('join-us')){
            $(this).width( (100 / noElsInRow * (noElsInRow - (i % noElsInRow)))+ '%');
            $(this).attr("class", "join-us cols_" + (noElsInRow - (i % noElsInRow)));
        }
    });
    
    if(curList.find('>li').length > 0)
        list.eq(0).before(curList)

    list.remove();
    var lightbox = container.find('.our_maison_gallery').parent();
    if (lightbox.length > 0) {
        lightbox.remove();
        var listCont = listEls.filter('.active').parent(),
            lightbox = $(_richemontCareers.ajaxData);
        if (listCont.next().length > 0) {
            listCont.after(lightbox);
        } else {
            listCont.before(lightbox);
        }
        _richemontCareers.MaisonSlideshow(lightbox, listEls.filter('.active a'), false, callback)
    }
}

_richemontCareers.getNoElsInRow = function () {
    var w = $(window).width();
    for (var i = 0; i < _richemontCareers.widthElCnt.length; i++) {
        if (w > _richemontCareers.widthElCnt[i].width) {
            return _richemontCareers.widthElCnt[i].elCnt;
        }
    };
    return 1;
}
_richemontCareers.videoNo = 0;

_richemontCareers.videoHandler = function (el) {
    el.find('a[rel="video"]').click(function (e) {
        e.preventDefault();
        $.get($(this).attr('href'), function (data) {
            var cont = $(data);
            cont.css({
                'position': 'fixed',
                'top': 0,
                'left': 0,
                'height': '100%',
                'width': '100%',
                'background': '#000',
                'z-index': '1000'
            });
            cont.appendTo(document.body);
            $('#video_content').attr('id', 'maison_video_content' + _richemontCareers.videoNo);
            var vidId = 'maison_video_content' + _richemontCareers.videoNo++;
            videojs(vidId, {
                "techOrder": ["youtube"],
                "src": $('#' + vidId).data('src')
            });
            cont.find('a.video_close').click(function (e) {
                e.preventDefault();
                cont.remove();
            })
        })
    })
}