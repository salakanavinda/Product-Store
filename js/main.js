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


$('.slider-two')
.not(".slick-intialized")
.slick(
    {
         slidesToShow: 5,
         slidesToScroll: 1,
         prevArrow:".prev2",
         nextArrow:".next2"
         
    }
);