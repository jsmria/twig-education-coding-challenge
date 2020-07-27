import React from "react";
import { render } from "react-dom";
// import { Router } from "react";
import ArraySeparator from "./ArraySeparator";

const App = () => {
  return (
    <>
      <ArraySeparator path="/" />
    </>
  );
};

render(<App />, document.getElementById("root"));
