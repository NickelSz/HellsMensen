/**
 * Import von MapBox
 * 
 */
mapboxgl.accessToken = 'pk.eyJ1IjoibGF1cmlwZWMiLCJhIjoiY2tmaGF1YXJoMGF1MTJ1cDhlMHp0aDV4dCJ9.8Sz7_ZLqPFs6Pte0nhpDzQ';

/**
 * Definiert neue Variable die er sich aus der Datenbank holt
 * @var {String} x momentaner Standort des Users
 * 
 */
var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

/**
 * Funktion mit aktueller Position
 * @return momentanen Standort per Ausgabe
 * 
 */

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
 // var lat = position.coords.latitude;
  //var long = position.coords.longitude;
  //console.log(lat, long);
}  


var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [13.5135232, 52.455014399999996],
  zoom: 10
  
});

/**
 * Zeigt optisch den momentanen Standort der Perosn auf der Karte
 * @return Standort auf der MapBox
 * 
 */
var geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [11.6756665706635
            , 52.1400665853041]
      },
      properties: {
        title: 'Mapbox',
        description: 'Eigener Standort'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [11.6475999355316, 52.1396188273019]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }]
  };

 




  // add markers to map
geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';
  
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
  });

  var homepointjson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.5135232, 52.455014399999996]
      },
      properties: {
        title: 'Mapbox',
        description: 'Eigener Standort'
      }
    }]
  };

   // add markers to map
   homepointjson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var mr = document.createElement('div');
    mr.className = 'markerhome';
  
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(mr)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
  });