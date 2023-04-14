// API request for bars neaby coordinates 
async function Locations(lat, lng) {
  const resp = await fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=300&keyword=bar&rankby=prominence&key=${process.env.GOOGLE_MAPS_API_KEY}`
  );
  const data = await resp.json();
  console.log(data);
  return data;
}

module.exports = Locations;