$(function() {
    // Change service on hover
    $('.hover-box', '.one').mouseover(function(){
        $('.change-hover-box', '.one').addClass('onchange-hover-box')
        $('.change-hover-box', '.one').removeClass('change-hover-box')
    });
    $('.hover-box', '.one').mouseleave(function(){
        $('.onchange-hover-box', '.one').addClass('change-hover-box')
        $('.onchange-hover-box', '.one').removeClass('onchange-hover-box')
    });

    $('.hover-box', '.two').mouseover(function(){
        $('.change-hover-box', '.two').addClass('onchange-hover-box')
        $('.change-hover-box', '.two').removeClass('change-hover-box')
    });
    $('.hover-box', '.two').mouseleave(function(){
        $('.onchange-hover-box', '.two').addClass('change-hover-box')
        $('.onchange-hover-box', '.two').removeClass('onchange-hover-box')
    });


    $('.hover-box', '.three').mouseover(function(){
        $('.change-hover-box', '.three').addClass('onchange-hover-box')
        $('.change-hover-box', '.three').removeClass('change-hover-box')
    });
    $('.hover-box', '.three').mouseleave(function(){
        $('.onchange-hover-box', '.three').addClass('change-hover-box')
        $('.onchange-hover-box', '.three').removeClass('onchange-hover-box')
    });

    // Change menubar 
    $(window).scroll(function() {
        var positionAbout = $('#about').offset().top - 1;
        if($(this).scrollTop() < positionAbout) {
            $('#menu').removeClass('change-menu');
            $('.logo-img').attr('src', 'img/logo/logotext-white.png');
            $('.menu-burger-img').attr('src', 'img/icon/burger-white.png');
            $('.change-current-menu').removeClass('current-menu');
        } else {
            $('#menu').addClass('change-menu');
            $('.logo-img').attr('src', 'img/logo/logotext-color.png');
            $('.menu-burger-img').attr('src', 'img/icon/burger-black.png');
            $('.change-current-menu').addClass('current-menu');
        }
    });
    
    // Hover menu bar
    $('.link-menu').hover(function(){
        $(this).toggleClass('hover-menu');
    });
    
 });
 