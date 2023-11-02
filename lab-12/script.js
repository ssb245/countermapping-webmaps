mapboxgl.accessToken = 'pk.eyJ1Ijoic3NiMjQ1IiwiYSI6ImNsbjM2OWcwNzBkcncya3A5cW1xcDVveHYifQ.xLMsLxb2C4-z2_aHTmPkyw';
const map = new mapboxgl.Map({
	container: 'stephanie',
	style: 'mapbox://styles/ssb245/clod143wu00rf01pbavxs8z50',
	center: [-122.41639, 37.77063],
	zoom: 13,
	pitch: 25,
	bearing: 0.00
})
map.on('load', function (){
	console.log('My name is Stephanie');
	map.addSource('restaurantSource', {
			'type':'vector',
			'url': 'mapbox://ssb245.94i8608b'
		});
	map.addLayer(
		{
			'id': 'restaurant',
			'type':'circle',
			'source': 'restaurantSource',
			'source-layer': 'Restaurant_Scores_-_LIVES_Sta-5j55mj',
			'paint':{
				'circle-color': 
				['step', ['to-number',
					['get','inspection_score']],
					'#ccc',
					45,'#440154',
					80,'#3b528b',
					85,'#21908d',
					90,'#5dc963',
					95,'#fde725'
					],
			}
		});
	map.on('mouseenter', 'restaurant', (e) => {
		// console.log(e.features[0]['properties']['business_name']);
		var name = e.features[0]['properties']['business_name'];
		var textField = document.getElementById('restText');
		textField.innerHTML = name;
	})
});