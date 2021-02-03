function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 52.353811539834204, lng: 4.665835469182834 },
  });
  new google.maps.Marker({
    position: { lat: 52.353811539834204, lng: 4.665835469182834 },
    map,
    title: "I can see my house from here!",
    animation: google.maps.Animation.DROP,
  });
  new google.maps.Marker({
    position: { lat: 52.369498, lng: 4.661288 },
    map,
    title: "I can see my veggies from here!",
    animation: google.maps.Animation.DROP,
  });
}