/*
api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,precipitation,rain,weather_code,cloud_cover&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=GMT&forecast_days=3
*/
import axios from "axios";

const getWheather = (countrie) => {
  const [lat, lng] = countrie.capitalInfo.latlng;
  //   console.log("lat", lat, "long", lng);
  const baseUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}1&current=temperature_2m,relative_humidity_2m,precipitation,rain,weather_code,cloud_cover&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=GMT&forecast_days=3`;
  //   console.log(baseUrl)
  return axios
    .get(baseUrl)
    .then((cons) => cons.data)
    .catch((er) => console.log(er));
};

export default { getWheather };
