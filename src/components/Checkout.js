import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const products = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {products.map((product) => (
          <div className="cartCard">
            <img src="" alt=""></img>
            <img src={product.image} alt=""></img>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
          </div>
        ))}
      </div>
      <Link to="/" className="btn1">
        Proceed to Pay
      </Link>
    </div>
  );
};

export default Checkout;
