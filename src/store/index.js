import React, { Component } from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { copy } from "../utils";

const initialState = {
  selectedCategory: "all",
  currentCurrency: "$",
  showCurrencies: false,
  showMiniCart: false,
  cartProducts: [],
  selectedOptions: [],
};

const increaseQty = (state, productId) => {
  const cart = copy(state.cartProducts);
  const item = cart.find((elt) => elt.id === productId);
  cart[cart.indexOf(item)].quantity++;
  return {
    ...state,
    cartProducts: cart,
  };
};

const decreaseQty = (state, productId) => {
  const cart = copy(state.cartProducts);
  const item = cart.find((elt) => elt.id === productId);
  if (cart[cart.indexOf(item)].quantity === 1) return state;
  cart[cart.indexOf(item)].quantity--;
  return {
    ...state,
    cartProducts: cart,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SWITCH_CURRENCY":
      return {
        ...state,
        showCurrencies: !state.showCurrencies,
        currentCurrency: action.payload,
      };
    case "TOGGLE_CURRENCY":
      return {
        ...state,
        showCurrencies: !state.showCurrencies,
      };
    case "TOGGLE_MINI_CART":
      return {
        ...state,
        showMiniCart: !state.showMiniCart,
      };
    case "CLOSE_MINI_CART":
      return {
        ...state,
        showMiniCart: false,
      };
    case "SET_SELECTED_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartProducts: [],
      };
    case "INCREASE_QUANTITY":
      return increaseQty(state, action.payload);
    case "DECREASE_QUANTITY":
      return decreaseQty(state, action.payload);

    case "ADD_SELECTED_OPTION":
      return {
        ...state,
        selectedOptions: [...copy(state.selectedOptions), action.payload],
      };
    case "UPDATE_SELECTED_OPTION":
      const options = copy(state.selectedOptions);
      const option = options.find((elt) => elt.id === action.payload.id);
      options[options.indexOf(option)].selectItem = action.payload.selectItem;
      return {
        ...state,
        selectedOptions: options,
      };
    case "CLEAR_SELECTED_OPTIONS":
      return {
        ...state,
        selectedOptions: [],
      };
    default:
      return state;
  }
};

export default reducer;

const DevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, DevTools);

const StoreProvider = class extends Component {
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
};

export { StoreProvider, connect };
