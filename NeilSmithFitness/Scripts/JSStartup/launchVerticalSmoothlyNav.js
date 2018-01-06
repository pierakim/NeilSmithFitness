$(document).ready(function ($) {
    //scrolling on click
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            var id = target[0].id;
            var ratio = id == "aboutMe" || id == "photoCarroussel" ? $(window).height() / 4 : 0;
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - ratio
                }, 1500);
                return false;
            }
        }
    });

    //show/hide label
    $('.vNav a').hover(function () {
        $(this).find('.label').show();
    }, function () {
        $(this).find('.label').hide();
    });
});