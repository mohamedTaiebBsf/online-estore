import React, { Component } from "react";
import rootReducer from "./reducers";
import * as persistor from "./state-persistor";
import { mapStateToProps, mapDispatchToProps } from "./state-mappers";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

const DevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, persistor.load(), DevTools);

store.subscribe(() => {
  const state = store.getState();

  persistor.save({
    cart: state.cart,
    categ: state.categ,
    curr: state.curr,
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
