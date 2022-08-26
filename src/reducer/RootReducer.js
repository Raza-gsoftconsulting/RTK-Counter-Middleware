import { combineReducers } from "redux";
import Reduce from "./cartSlice";

const RootReducer = combineReducers({
  cart: Reduce,
});

export default RootReducer;
