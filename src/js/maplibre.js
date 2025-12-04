import maplibregl from "maplibre-gl";

const carte = new maplibregl.Map({
  container: "coordinates",
  style: "https://api.maptiler.com/maps/toner-v2/style.json?key=jkX67hBxZ6FTPpeTpZ68",
  center: [-73.5969397, 45.8627733],
  zoom: 17,
  attributionControl: false,
  pitch: 45,
  interactive: false,
});

function rotateMap(timestamp) {
    carte.rotateTo((timestamp / 50) % 360, { duration: 0 });
    requestAnimationFrame(rotateMap);
}

carte.on('load', () => {
    rotateMap(0);
});



new maplibregl.Marker().setLngLat([-73.5969397, 45.8627733]).addTo(carte);