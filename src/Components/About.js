import React from "react";
import { Link, useSearchParams } from "react-router-dom";
// useParams;
// useLocation;
function About() {
  // let params = useParams();   // when ever need params we should use this syntax for path parameters
  // let { search } = useLocation();
  // let params = new URLSearchParams(search);  First way for query params to get the values
  const [searchParams] = useSearchParams(); // this is the second way to get the params in the link
  const name = searchParams?.get("name");
  const age = searchParams?.get("age");
  return (
    <div>
      Welcome to About Page
      <br />
      Name:{name}
      Age:{age}
      {/* Name : {params.get("name")} <br />
      Age : {params.get("age")} <br /> */}
      {/* Name:{params?.name} <br />  it is  for getting the name from the url using path params*/}
      <Link to="/">Back to Home Page </Link>
    </div>
  );
}

export default About;
