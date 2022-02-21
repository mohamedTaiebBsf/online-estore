import { combineReducers } from "redux";
import currency from "./currency";
import cart from "./cart";
import category from "./category";
import selectedOptions from "./selectedOptions";
import toast from "./toast";

const rootReducer = combineReducers({
  curr: currency,
  cart: cart,
  categ: category,
  options: selectedOptions,
  toast,
});

export default rootReducer;
