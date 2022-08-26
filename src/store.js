import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import cartReducer from "./reducer/cartSlice";

const myResponse = (store) => {
  return (next) => {
    return (action) => {
      return next(action);
    };
  };
};

const store = configureStore(
  {
    reducer: {
      cart: cartReducer,
    },
  },
  applyMiddleware(myResponse),
  console.log("middleware is working",myResponse)
);

export default store;
