$(window).scroll(function() {
    if($(this).scrollTop() != 0) {
    $('.toTop').fadeIn();
    } else {
    $('.toTop').fadeOut();
    }
});

$(document).ready(function(){
    $('.toTop').click(function(event) {
        $('body,html').animate({scrollTop:0},1000);
    });
});