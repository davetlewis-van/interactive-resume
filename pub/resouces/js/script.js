$(document).ready(function() {
    
    $('.js-section-about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } 
        else {
            $('nav').removeClass('sticky');
        } 
    });
    
    /* Scroll on buttons */
    $('.js-scroll-to-contact').click(function() {
        $('html, body').animate({scrollTop: $('.js-footer').offset().top}, 1000);
    });

    /* Mobile nav */
    $('.js-nav-icon').click(function() {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) 
        {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }
        else 
        {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
});