import React from "react";
import { useContext } from "react";
import { store } from "../App";
function ComponentA() {
  const [incrementData, setIncrementData] = useContext(store);
  return <div>Props Drilling Count :{incrementData?.length}</div>;
}

export default ComponentA;
