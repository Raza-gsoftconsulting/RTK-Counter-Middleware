import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div>
      <h1>Your API is Successfully Fetched</h1>
      <Link to="/" className="btn">
        Home
      </Link>
    </div>
  );
};

export default SuccessPage;
