$(function(){
    $('.testimonials__content').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><svg class="slick-icon" width="10" height="17"><use xlink:href="images/icons/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="slick-icon" width="10" height="17"><use xlink:href="images/icons/sprite.svg#arrow-right"></use></svg></button>',
    });



    var mixer = mixitup('.popular-categories__content');
});