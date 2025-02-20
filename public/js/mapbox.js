export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic29mayIsImEiOiJjbHkwNXNlaHMwZXJmMmlzYmF1N2x5ajNmIn0.QQEU4hpTrNrARoVADNKNcQ';
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v11', // style URL
    scrollZoom: false,
    // center: [-118.28971027987757, 34.06196965037127],
    // zoom: 10,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);
    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 50,
      left: 100,
      right: 100,
    },
  });
};
