import React, { Component } from "react";
import rootReducer from "./reducers";
import { mapStateToProps, mapDispatchToProps } from "./state-mappers";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

const DevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, DevTools);

const StoreProvider = class extends Component {
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
};

const storeConsumer = (WrappedComponent) =>
  connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);

export { StoreProvider, storeConsumer };
