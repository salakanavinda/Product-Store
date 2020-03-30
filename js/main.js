$('.slider-one')
.not(".slick-intialized")
.slick(
    {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow:".prev",
        nextArrow:".next",
        dots: true,
    }
);