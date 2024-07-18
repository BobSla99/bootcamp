import axios from "axios";

const urlAll = "https://studies.cs.helsinki.fi/restcountries/api/all";
const urlBase = "https://studies.cs.helsinki.fi/restcountries/api/name/";

const getAll = () => {
  return axios.get(urlAll)
    .then((resp) => resp.data)
    .catch((er) => console.log(er));
};

const getThis = (commonName) => {
  return axios
    .get(`${urlBase}${commonName}`)
    .then((resp) =>  resp.data)
    .catch((er) => console.log(er));
};

export default { getAll, getThis };
