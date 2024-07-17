import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      Welcome to Dashboard Page
      <br />
      <Link to="/"> Back to Home page</Link>
    </div>
  );
}

export default Dashboard;
