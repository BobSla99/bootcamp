import "../App.css"

const Results = ({ countries, clickHandle,show }) => {
  // console.log(countries.length)
  // console.log('contries at output',countries)
  //   console.log(countries);

  if (countries === null|| show===null) {
    return null;
  } else {
    countries.forEach((element) => {});
    return (
      <div className="result-card">
        <ul>
          {countries.map((c) => {
            const id = Math.random().toString(36).slice(3);
            return (
              <div key={id} className="countrie-card">
                <li key={id} id={c.name.common} onClick={clickHandle}>
                  <img src={c.flags.png} alt="" />
                  {c.name.common}
                  <span className="spacer"></span>
                  <button id={c.name.common} onClick={clickHandle}>
                    details
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Results;
