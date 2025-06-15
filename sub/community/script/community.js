//community.js

$(function(){

    $('.gnb li').hover(function(){

        $(this).find('.lnb').fadeIn();


    }, function(){
        $(this).find('.lnb').fadeOut();
    });
});


/* 맨위로 */
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};