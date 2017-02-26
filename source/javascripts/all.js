$(document).ready(function(){
  var position = {lat: 41.980628696472166, lng: -70.6864321231842}

  var map = new google.maps.Map(document.getElementById('map'), {
    center: position,
    zoom: 15,
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
        'featureType': 'road',
        'elementType': 'geometry.stroke',
        'stylers': [
          { 'color': '#FFFFFF' }
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
