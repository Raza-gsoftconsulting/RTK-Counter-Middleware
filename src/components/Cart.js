import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../reducer/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

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
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <Link to="/" className="btn">
        Home
      </Link>
      <Link to="/Checkout" className="btn">
      Checkout
      </Link>
    </div>
  );
};

export default Cart;
