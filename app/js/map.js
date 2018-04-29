function initMap() {}

$(function() {
	if(window.location.toString().indexOf('contact.html')>0)
		{
			var element,
					options,
					myMap,
					marker;

			element = document.getElementById('map');

			options = {
				zoom: 14,
				center: {lat: 52.1314026, lng: -106.6476407},
				disableDefaultUI: true,
				gestureHandling: 'none'
			};

			myMap = new google.maps.Map(element, options);

			marker = new google.maps.Marker({
				position: {lat: 52.1340026, lng: -106.6480407},
				map: myMap
			});
		}
});