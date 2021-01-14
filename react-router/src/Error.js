import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div class="center-col">
      <h1 style={{ margin: "10px 10px" }}>Error</h1>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
