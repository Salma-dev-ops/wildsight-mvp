// Initialize map centered in Amboseli region
var map = L.map('map').setView([-2.4, 36.8], 10);

// Base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// ------------------------------
// Correct bounds for all rasters
// ------------------------------
const amboseliBounds = [
  [-2.90016597901567, 36.29997740022154],  // south-west
  [-1.90007157320541, 37.30034130061704]   // north-east
];

// ------------------------------
// NDVI (green tone)
// ------------------------------
var ndviLayer = L.imageOverlay(
  "amboseli_ndvi_green.png",
  amboseliBounds,
  { opacity: 0.55 }
).addTo(map);

// ------------------------------
// HWC Heatmap (dark brown)
// ------------------------------
var hwcLayer = L.imageOverlay(
  "hwc_heatmap_brown.png",
  amboseliBounds,
  { opacity: 0.6 }
).addTo(map);

// ------------------------------
// Priority Zones (inferno)
// ------------------------------
var priorityLayer = L.imageOverlay(
  "priority_zone.png",
  amboseliBounds,
  { opacity: 0.7 }
).addTo(map);

// ------------------------------
// Layer Control
// ------------------------------
L.control.layers(
  null,
  {
    "NDVI – Vegetation Index": ndviLayer,
    "HWC Hotspots – Conflict Risk": hwcLayer,
    "Priority Reforestation Zones": priorityLayer
  }
).addTo(map);
