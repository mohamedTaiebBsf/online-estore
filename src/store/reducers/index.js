import { combineReducers } from "redux";
import currency from "./currency";
import cart from "./cart";
import category from "./category";
import selectedOptions from "./selectedOptions";

const rootReducer = combineReducers({
  curr: currency,
  cart: cart,
  categ: category,
  options: selectedOptions,
});

export default rootReducer;
