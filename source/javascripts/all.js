$(document).ready(function(){
  var position = {lat: 41.980628696472166, lng: -70.6864321231842}

  var coordinates = [
    { lat: 41.982617, lng: -70.697223 },
    { lat: 41.982316, lng: -70.695181 },
    { lat: 41.982084, lng: -70.694612 },
    { lat: 41.980601, lng: -70.693400 },
    { lat: 41.979149, lng: -70.692134 },
    { lat: 41.978822, lng: -70.691726 },
    { lat: 41.978503, lng: -70.691039 },
    { lat: 41.978128, lng: -70.689602 },
    { lat: 41.978679, lng: -70.689194 },
    { lat: 41.978774, lng: -70.689248 },
    { lat: 41.979508, lng: -70.689473 },
    { lat: 41.979668, lng: -70.689462 },
    { lat: 41.979771, lng: -70.689355 },
    { lat: 41.980186, lng: -70.688422 },
    { lat: 41.980401, lng: -70.688164 },
    { lat: 41.980553, lng: -70.687853 },
    { lat: 41.980808, lng: -70.687617 },
    { lat: 41.980628, lng: -70.686432 }
  ]

  var map = new google.maps.Map(document.getElementById('map'), {
    center: position,
    zoom: 15,
    scrollWheel: false,
    styles: [
      {
        'featureType': 'water',
        'elementType': 'geometry.fill',
        'stylers': [
          { 'color': '#D4AE0A' }
        ]
      },
      {
        'featureType': 'landscape',
        'elementType': 'geometry.fill',
        'stylers': [
          { 'color': '#FFCF00' }
        ]
      },
      {
        'featureType': 'road',
        'elementType': 'geometry.fill',
        'stylers': [
          { 'color': '#FFFFFF' }
        ]
      },
      {
        'featureType': 'poi',
        'elementType': 'geometry.fill',
        'stylers': [
          {'color': '#FFFFFF'}
        ]
      },
      {
        'featureType': 'landscape.man_made',
        'elementType': 'geometry.stroke',
        'stylers': [
          {'color': '#FFFFFF'}
        ]
      },
      {
        'featureType': 'road',
        'elementType': 'geometry.stroke',
        'stylers': [
          { 'color': '#FFFFFF' },
          { 'saturation': '50'}
        ]
      },
      {
        'featureType': 'transit.line',
        'elementType': 'geometry.fill',
        'stylers': [
          { 'color': '#282832' }
        ]
      }
    ]
  });

  var marker = new google.maps.Marker({
    position: position,
    map: map
  });

  var path = new google.maps.Polyline({
    path: coordinates,
    strokeColor: '#282832',
    strokeOpacity: 1.0,
    strokeWeight: 4,
  });

  path.setMap(map);

  $(window).scroll(function(){
    var triggerHeight = $('.hero-logo').offset().top;
    var scrollPosition = $(window).scrollTop();

    if(scrollPosition > triggerHeight) {
      $('nav').addClass('scrolling');
    }

    else if(scrollPosition < triggerHeight) {
      $('nav').removeClass('scrolling');
    }
  });

  $('.scroll').click(function(){
    var anchor = $(this).data('anchor');
    var id = "#" + anchor;

    $('html,body').animate({scrollTop: $(id).offset().top });
  });
});
