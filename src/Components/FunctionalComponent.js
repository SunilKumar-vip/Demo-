import React, { useState } from "react";
import FunctionalProps from "./FunctionalProps";

function FunctionalComponent() {
  const [name, setName] = useState({
    firstName: "Sunil",
    secondName: "Machani",
    age: 26,
    role: "Software Developer",
  });
  const handleClick = () => {
    console.log({ ...name });
    setName({ ...name, firstName: "Kumar" });
  };
  return (
    <div>
      <h1>Name:{name?.firstName}</h1>
      <button onClick={handleClick}>Click me to change the name</button>
      <FunctionalProps firstName={name?.firstName} />
    </div>
  );
}

export default FunctionalComponent;
