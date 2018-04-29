$(function() {
  $('.slider__main').slick({
  	fade: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	autoplay: true,
    responsive: [
      {
        breakpoint: 480,
          settings: {
            arrows: false,
          }
      }
    ]
  });
   $('.slider__small').slick({
   	slidesToShow: 6,
   	slidesToScroll: 1,
   	asNavFor: '.slider__main',
   	focusOnSelect: true,
    responsive: [
    {
       breakpoint: 992,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          arrows: false,
          infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
          slidesToShow: 2,
          centerMode: true,
          arrows: false,
          infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
          slidesToShow: 1,
          centerMode: true,
          arrows: false,
          infinite: true,
      }
    },
    ]
  });
});