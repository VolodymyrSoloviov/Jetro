$(function() {
  $('.slider__main').slick({
  	fade: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	autoplay: true,
  });
   $('.slider__small').slick({
   	slidesToShow: 6,
   	slidesToScroll: 1,
   	asNavFor: '.slider__main',
   	focusOnSelect: true,
  });
});