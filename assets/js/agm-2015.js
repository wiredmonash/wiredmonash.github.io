var map;
var loc = new google.maps.LatLng(-37.9124243,145.130568);
var ctr = new google.maps.LatLng(-37.9117853,145.1329016);

function initialize() {

  // styling the map
  var styles = [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    }
  ];

  // map options
  var mapOptions = {
    zoom: 17,
    minZoom: 17,
    center: ctr,
    disableDefaultUI: true,
    zoomControl: true,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styles,
  };

  // create map
  map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);

  // create marker
  var marker = new google.maps.Marker({
      position: loc,
      map: map,
      title: '37 Rainforest Walk'
  });

};

google.maps.event.addDomListener(window, "load", initialize);
