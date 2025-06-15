//about.js

$(function(){

    $('.gnb li').hover(function(){

        $(this).find('.lnb').fadeIn();


    }, function(){
        $(this).find('.lnb').fadeOut();
    });
});