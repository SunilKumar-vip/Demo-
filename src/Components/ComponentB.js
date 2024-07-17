import React, { useContext } from "react";
import { store } from "../App";

function ComponentB() {
  const [incrementData, setIncrementData] = useContext(store);
  return (
    <div>
      Props Drilling for ComponentB
      {incrementData?.map((data) => {
        return <li>{data?.dashboardName}</li>;
      })}
    </div>
  );
}

export default ComponentB;
