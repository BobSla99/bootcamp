import { useState } from "react";

const Counter = (props) => {
  console.count("rendering");
  const [count, setCount] = useState(0);


  const clickHandler = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === "-") {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };
  return ( 
    <>
      <div>
        <button onClick={clickHandler}>-</button>
        {count}
        <button onClick={clickHandler}>+</button>
        <br />
        <button  onClick={()=>setCount(0)}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
