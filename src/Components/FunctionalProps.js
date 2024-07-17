import React from "react";

function FunctionalProps(props) {
  return (
    <div>
      FunctionalProps
      <div>FirstName : {props?.firstName}</div>
    </div>
  );
}

export default FunctionalProps;
