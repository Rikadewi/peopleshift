$(function() {
    $(window).scroll(function () {
        var positionAbout = $('#about').offset().top - 1;
        if($(this).scrollTop() > positionAbout) {
            $('#menu').addClass('change-menu');
            $('.logo').attr('src', 'img/logo/logotext-color.png');
        }
        if($(this).scrollTop() < positionAbout) {
            $('#menu').removeClass('change-menu');
            $('.logo').attr('src', 'img/logo/logotext-white.png');
        }
    });
 });