import React from "react";
import { Link } from "react-router-dom";
function Home() {
  const user = "sunil";
  return (
    <div>
      Welcome to Home Page
      <br />
      <Link to="/dashboard"> Dashboard</Link> <br />
      {/* <Link to={`/about/${user}`}> About</Link>   for path parameters syntax we have to use */}
      <Link to={`/about?name=${user}&age=${28}`}> About</Link>
      {/* this is the syntax for query params*/}
    </div>
  );
}

export default Home;
