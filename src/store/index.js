import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { mapDispatchToProps, mapStateToProps } from "./state-mappers";
import * as persistor from "./state-persistor";

const DevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, persistor.load(), DevTools);

store.subscribe(() => {
  const state = store.getState();
  const { cart, categ, curr } = state;

  persistor.save({
    cart: { cartProducts: cart.cartProducts },
    categ: { selectedCategory: categ.selectedCategory },
    curr: { currentCurrency: curr.currentCurrency },
  });
});

const StoreProvider = class extends Component {
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
};

const storeConsumer = (WrappedComponent) =>
  connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);

export { StoreProvider, storeConsumer };
