import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="Style">
      <span>Redux Store</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="Cart">
          Cart
        </Link>
        <span className="cartCount">Cart Items:{items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
