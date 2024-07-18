import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const friends = ["pepe", "julio"];
  // los objetos no se pueden poner renderear directamente en react
  const friendsObjec = [{ nam: "pepe" }, { nam: "julio" }];

  return (
    <>
      <h1>Greetings </h1>
      <Helloa name="alex" age="34" />
      <Helloa name="loca" />
      <Helloa name="pepa" age="35" />
      <p>
      {friends[0]} y {friends[1]}{" "}
      </p>
    </>
  );
}

const Helloa = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        hello {props.name} your age is {props.age}{" "}
      </p>
    </div>
  );
};
export default App;
