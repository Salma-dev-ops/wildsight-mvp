// Initialize map centered around Amboseli
var map = L.map('map').setView([-2.65, 37.15], 11);

// Base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// NDVI raster (semi-transparent)
var ndvi = L.imageOverlay('amboseli_ndvi.png', 
  [[-2.9, 36.3], [-1.9, 37.3]],
  { opacity: 0.5 }
).addTo(map);

// HWC heatmap
var hwc = L.imageOverlay('hwc_hotspot.png',
  [[-2.9, 36.3], [-1.9, 37.3]],
  { opacity: 0.6 }
).addTo(map);

// Priority reforestation areas
var priority = L.imageOverlay('priority_zones.png',
  [[-2.9, 36.3], [-1.9, 37.3]],
  { opacity: 0.7 }
).addTo(map);

// Layer control
L.control.layers(null, {
  "NDVI Layer": ndvi,
  "HWC Hotspots": hwc,
  "Reforestation Zones": priority
}).addTo(map);
