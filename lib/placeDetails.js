// API request for more details on a specific place 
async function PlaceDetails(place_id) {
  const resp = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${process.env.GOOGLE_MAPS_API_KEY}`
  );
  const data = await resp.json();
  console.log(data);
  return data;
}

module.exports = PlaceDetails;