maptilersdk.config.apiKey = mapToken;

const map = new maptilersdk.Map({
  container: "map",
  style: maptilersdk.MapStyle.STREETS,
  center: coordinates,
  zoom: 10
});

new maptilersdk.Marker()
  .setLngLat([77.1025, 28.7041])
  .addTo(map);