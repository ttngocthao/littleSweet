function initMap(){
    var location = {lat: 51.454405, lng: -0.477822};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 8,
        center: location
    });
    var marker = new google.maps.Marker({position:location, map:map});
    
    
}