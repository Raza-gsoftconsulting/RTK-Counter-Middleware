import React, { useState, useEffect } from "react";
import { add } from "../reducer/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.status === 200) {
          const data = await response.json();
          setProducts(data);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div>
      {isLoading ? (
        <div>
          <h1>Loading....</h1>
        </div>
      ) : (
        <div>
          <div className="productsWrapper">
            {products.map((product) => (
              <div className="card" key={product.id}>
                <img src={product.image} alt=""></img>
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button onClick={() => handleAdd(product)} className="btn">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
