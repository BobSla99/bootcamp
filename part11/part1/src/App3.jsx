import Button from "./components/Button";
import { useState } from "react";

const History = (props) => {
  //Ejemplo de conditional rendering segun el state de la app
  //es lo que el componente rederea,
  if (props.allClicks.length === 0) {
    return (
      <>
        <p>the app is used by pressing the buttons</p>
      </>
    );
  } else {
    return (
      <>
        <div>button press hystory: {props.allClicks.join("")}</div>
      </>
    );
  }
};

const App3 = () => {
  const [clicks, setClick] = useState({ left: 0, right: 0 });
  console.log(clicks);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleRightClick = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1,
    };
    console.log("handle right", newClicks);
    setClick(newClicks);
    console.log("handle right", newClicks);

    setAll(allClicks.concat("R"));
    setTotal(total + 1);
  };

  //Utilizando el spread operator el obeto se 'copia spread ' con ...clicks y las keys que se modifiquen despues de la coma se sobrescriben,
  const handleLeftClick = () => {
    const newClicks = { ...clicks, left: clicks.left + 1 };
    console.log("handle left", newClicks);
    setClick(newClicks);

    setAll(allClicks.concat("L"));
    setTotal(total + 1);
  };

  //Funcion que resetea todo
  const handleReset = () => {
    setAll([]);
    setClick({ right: 0, left: 0 });
    setTotal(0);
  };

  return (
    <>
      {clicks.left}
      <Button label="izq" onClick={handleLeftClick} />
      {clicks.right}
      <Button label="der" onClick={handleRightClick} />
      <br />
      <Button label="reset" onClick={handleReset} />
      <hr />
      <History allClicks={allClicks} />
      <p>Total preses {total}</p>
    </>
  );
};

export default App3;
