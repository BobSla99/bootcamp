const Details = ({ countrie, show, backHandler,wheather }) => {
  // console.log(show, countrie);
  //   console.log(Object.values(countrie.capital))
  console.log(wheather)
  if (show === null || countrie === null||wheather===null) {
    return null;
  } else {
    const lang = Object.values(countrie.languages).join(", ");
    return (
      <div className="detail-card">
        <button onClick={backHandler}>Back</button>
        <h1>{countrie.name.official}</h1>
        <p>Common name:{countrie.name.common}</p>
        <p>Capital:{countrie.capital}</p>
        <p>Language:{lang}</p>
        <img src={countrie.flags.png} alt="" />
        <h1>Wheather in {countrie.name.common}</h1>
        <p>Temperature:{wheather.current.temperature_2m} F</p>
      </div>
    );
  }
};

export default Details;
