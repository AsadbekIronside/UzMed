const getLocationInfo = async(latitude, longitude) => {
    const myAPIKey = "460a837939cb49f39389d4d20401283f";
    const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${myAPIKey}`;
    const result = await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results[0]);
        return data.results[0]
      })
      .catch((error) => console.error(error));
    const obj = {
        country: result.country,
        city:result.city,
        county:result.county,
        street:result.street
    }
    return obj;
  }

export default getLocationInfo