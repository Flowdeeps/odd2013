

var heatMap = {

    restaurants: [],

    geocoder: null,
    map: null,
    mapMarkers: [],
    
    cache: {},

    init: function() {

    },

    initMap: function() {
        this.geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(47.378, 8.539);
        var mapOptions = {
          zoom: 9,
          center: latlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        this.map = new google.maps.Map(document.getElementById('heat-map'), mapOptions);
        $('#heat-map').show();
        console.log('map initalized');

    }
}
