
mapboxgl.accessToken = 'pk.eyJ1IjoibGF1cmlwZWMiLCJhIjoiY2tmaGF1YXJoMGF1MTJ1cDhlMHp0aDV4dCJ9.8Sz7_ZLqPFs6Pte0nhpDzQ';


var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  return [long, lat];
}  
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [13.5135232, 52.455014399999996],
  zoom: 10
  
});

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
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [11.8493020534515, 52.6150157580221]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [10.7600033283234, 51.8257591770436]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [11.0474610328674, 51.8953475464613]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.71405982971191, 52.3862085244495]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.7238821,52.3791768]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.61870193481445, 52.4258465741202]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.76545, 52.36893]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.79757308959961, 52.3544121502872]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.75419, 52.3773]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.72354412078857, 52.3531736331838]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.71426367759705, 52.3866537993508]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.3593320846558, 52.5005226051674]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.72354412078857, 52.3531736331838]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.6059719324112,52.5372747574638]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.2886826992035, 52.4529103498954]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.33823, 52.48551]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.5258704423904, 52.4931221056714]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [8.41692209243774, 49.0114083062193]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [8.39406967163086, 49.0148141642091]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [8.38565826416016, 49.0268242868277]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [8.42779040336609, 49.0045184720475]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [8.71684670448303, 48.8783063326788]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.3261853456497, 52.5097208716561]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.4030792, 52.5209593]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.2624292373657, 52.4235697906821]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [8.70763063430786, 48.8879226433029]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.4393295, 52.5579816]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.3928918838501, 52.5184210453008]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.3821308612823, 52.5281801653541]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.3549761772156, 52.5445014448455]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.5300493240356,52.4293498430889]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.39104, 52.51357]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.3573579788208, 52.425427864151]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.5333438, 52.4884585]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.01494, 52.399]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.051575422287, 52.4138430685233]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.6318981647491, 52.3181629864939]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [12.5367093086243, 52.4119354240112]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [12.9789519309998, 52.4079104487786]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.1278145313263, 52.3935353446923]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [12.3781263828278, 51.3374622576675]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [12.37371, 51.31321]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [12.3547911643982, 51.3386016939809]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
    ,
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.5245776176453, 52.4556105829113]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
  ]
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