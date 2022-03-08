import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(4);
  //const [theme, setTheme] = useState("blue");

  function decrementCount() {
    setCount((preState) => {
      return preState - 1;
    });

    // setTheme((preState) => {
    //   return "red";
    // });
  }

  function incrementCount() {
    setCount((preState) => {
      return preState + 1;
    });

    // setTheme((preState) => {
    //   return "yellow";
    // });
  }

  return (
    <React.Fragment>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      {/* <span>{theme}</span> */}
      <button onClick={incrementCount}>+</button>
    </React.Fragment>
  );
}

export default App;
