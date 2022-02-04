import React, { Component } from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

const initialState = {
  selectedCategory: "",
  currentCurrency: "$",
  showCurrencies: false,
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
    case "SET_SELECTED_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
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

const actions = {};

export { StoreProvider, connect };
