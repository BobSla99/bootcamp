import { useEffect, useState } from "react";
import "./App.css";
import Finder from "./components/Finder";
import Results from "./components/Results";
import ConectService from "./services/conect";
import Details from "./components/Details";
import Wheather from "./services/wheatherConect";

function App() {
  const [allCountries, setAllCountrie] = useState([]);
  const [countries, setCountries] = useState(null);
  const [countrie, setCountrie] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [showDetails, setShowDetails] = useState(null);
  const [showFinder, setShowFinder] = useState(true);
  const [wheather,setWheather]=useState(null);

  useEffect(() => {
    console.log("useEffect");
    //get all countries
    ConectService.getAll().then((allCountries) => {
      setCountries(allCountries);
      setAllCountrie(allCountries);
    });
  }, []);

  //On Searchinput change
  const inputHandler = (e) => {
    const value = e.target.value;
    //busca los paises que coincidan
    //si el valor de value es nada todo pasan el filtro ya que
    // en el c.name.common.toLowerCase().slice(0, value.length)
    //value el .....slice(0,0) dando po tanto en el parametro de
    //la izquierda un "" lo que cumple la conclucion.
    const filteredCountries = allCountries.filter(
      (c) =>
        c.name.common.toLowerCase().slice(0, value.length) ===
        value.toLowerCase()
    );
    // console.log("paises filtrados", filteredCountries.length);
    setInputValue(value);
    setCountries(filteredCountries);
  };

  const backHandler = (e) => {
    setShowDetails(null);
    setShowResult(true);
    setShowFinder(true);
  };

  const detailHandler = (e) => {
    // console.log(e.target.id, showResult);
    const commonName = e.target.id;
    ConectService.getThis(commonName).then((countrie) => {
      Wheather.getWheather(countrie).then(w=>setWheather(w));
      // console.log(countrie);
      setShowResult(null);
      setShowFinder(null);
      setShowDetails(true);
      setCountrie(countrie);
    });
  };
  return (
    <>
      <Finder
        show={showFinder}
        inputHandler={inputHandler}
        inputValue={inputValue}
      />
      <Results
        show={showResult}
        countries={countries}
        clickHandle={detailHandler}
      />
      <Details
        backHandler={backHandler}
        show={showDetails}
        countrie={countrie}
        wheather={wheather}
      />
    </>
  );
}

export default App;
