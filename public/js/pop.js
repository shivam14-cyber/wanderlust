new maptilersdk.Marker({color:"red"})
  .setLngLat(coordinates)
  .setPopup(
    new maptilersdk.Popup()
      .setHTML("<p>Exact location will be provid after booking</p>")
  )
  .addTo(map);