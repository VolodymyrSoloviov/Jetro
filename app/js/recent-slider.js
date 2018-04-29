$(function() {
  $(".recent-works__list").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    margin: 19,
    responsive: {
    	480: {
    		items: 2,
    	},
		768: {
			items:3,
        },
		992: {
			items:4,
        },
	}
  });
});