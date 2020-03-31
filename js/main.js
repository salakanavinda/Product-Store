$('.slider-one')
.not(".slick-intialized")
.slick(
    {
         autoplay: true,
         autoplaySpeed: 3000,
         prevArrow:".prev",
         nextArrow:".next",
         dots: true,
    }
);