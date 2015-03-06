var map;
var loc = new google.maps.LatLng(-37.911869, 145.132925);
var ctr = new google.maps.LatLng(-37.9107504,145.1330131);

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
      title: 'Campus Centre'
  });

};

google.maps.event.addDomListener(window, "load", initialize);
