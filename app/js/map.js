$(function() {
	var element = document.getElementById('map');
	var options = {
		zoom: 14,
		center: {lat: 52.1314026, lng: -106.6476407},
		disableDefaultUI: true,
		gestureHandling: 'none',
	};

	var myMap = new google.maps.Map(element, options);

	var marker = new google.maps.Marker({
		position: {lat: 52.1340026, lng: -106.6480407},
		map: myMap,

	})

});