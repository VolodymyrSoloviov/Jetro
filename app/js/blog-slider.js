$(function() {
  $(".blog-slider").owlCarousel({
    items: 1,
    loop: true,
  });

  var owl = $('.owl-carousel');
	owl.owlCarousel();

  $('.blog-slider__arrow-next').click(function() {
    owl.trigger('next.owl.carousel');
	})

	$('.blog-slider__arrow-prev').click(function() {
    owl.trigger('next.owl.carousel');
	})
});