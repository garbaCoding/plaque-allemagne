
const minLat = 47.2;
const maxLat = 55.1;
const minLon = 5.9;
const maxLon = 15.1;

// Zone utile de la silhouette sur le SVG
const effectiveMinX = 45;
const effectiveMaxX = 355;
const effectiveMinY = 15;
const effectiveMaxY = 435;

export function latLonToXY(lat, lon) {
  const x = effectiveMinX + ((lon - minLon) / (maxLon - minLon)) * (effectiveMaxX - effectiveMinX);
  const y = effectiveMinY + ((maxLat - lat) / (maxLat - minLat)) * (effectiveMaxY - effectiveMinY);
  return { x, y };
}