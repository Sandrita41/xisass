function menuScroll() {
    var numberOfLinks = $('.main_nav > a').length,
        href = '';

    for (var i = 0; i < nuorodu_skaicius; i++) {
        href_verte = $('.main_nav > a').eq(i).attr('href');

        if (scrollY >= $(href).offset().top &&
            scrollY < $(href).offset().top + $(href).height()) {
            $('.main_nav > a[href="' + href + '"]').addClass('active');
        } else {
            $('.main_nav > a[href="' + href + '"]').removeClass('active');
        }
    }
    return;
}