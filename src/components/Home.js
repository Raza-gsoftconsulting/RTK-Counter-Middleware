import React from "react";
import Products from "../reducer/Products";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Redux ToolKit</h1>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
