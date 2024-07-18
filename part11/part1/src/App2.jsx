import Counter from "./components/Counter";
import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };
  return (
    <>
      <p>
        Hello {props.name},you are {props.age} years old,and you born in{" "}
        {bornYear()};
      </p>
    </>
  );
};

const App2 = () => {
  const name = "peter";
  const age = 10;

  const [count, setCount] = useState(0);
  console.log("Rendering with counter value ", count);
  const increaseByOne = () => {
    setCount(count + 1);
    console.log("increasing,value before ", count);
  };
  const decreaseByOne = () => {
    setCount(count - 1);
    console.log("decreasing,value before ",count);
  };

  return (
    <>
      <h1>Greetings</h1>
      <Display counter={count} />
      <Button label={"Minus"} onClick={decreaseByOne} />

      <Button label={"Plus"} onClick={increaseByOne} />
      {/* <button onClick={increaseByOne}>Plus</button> */}

      <Hello name="Maya" age={26 + 45} />
      <Hello name={name} age={age} />
    </>
  );
};

export default App2;
