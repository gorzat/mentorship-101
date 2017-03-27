function initMap() {
    var krakow = { lat: 50.400, lng: 20.000 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: krakow
    });
}
