// Initialize and add the map
function initMap() {
  // The location of Carleton University
  const carleton = { lat: 45.387533, lng: -75.696020 };
  // The map, centered at Carleton University
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: carleton,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: carleton,
    map: map,
  });
}