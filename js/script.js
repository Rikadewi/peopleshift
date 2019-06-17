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
        if($(this).scrollTop() > positionAbout) {
            $('#menu').addClass('change-menu');
            $('.logo').attr('src', 'img/logo/logotext-color.png');
            $('.change-current-menu').addClass('current-menu');
        }
        if($(this).scrollTop() < positionAbout) {
            $('#menu').removeClass('change-menu');
            $('.logo').attr('src', 'img/logo/logotext-white.png');
            $('.change-current-menu').removeClass('current-menu');
        }
    });

    // Hover menu bar
    $('.link-menu').mouseover(function(){
        $(this).addClass('hover-menu');
        $('.link-menu').addClass('blur-hover-menu');
        $(this).removeClass('blur-hover-menu');
    });
    $('.link-menu').mouseleave(function(){
        $(this).removeClass('hover-menu');
        $('.link-menu').removeClass('blur-hover-menu');
    });
    
 });
 