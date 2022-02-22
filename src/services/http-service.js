import React, { Component } from "react";
import Spinner from "../components/UI/spinner/spinner";
import {
  GET_CATEGORIES,
  GET_CATEGORY_PRODUCTS,
  GET_CURRENCIES,
  GET_PRODUCT_DETAILS,
} from "../schemas";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";

const client = new ApolloClient({
  uri: process.env.REACT_APP_BACKEND_URL,
  cache: new InMemoryCache({ addTypename: false }),
});

const HttpProvider = class extends Component {
  render() {
    return (
      <ApolloProvider client={client}>{this.props.children}</ApolloProvider>
    );
  }
};

const handleQuery = (WrappedComponent, schema, options = null) =>
  graphql(schema, {
    options: options && options.callback,
  })(
    class extends Component {
      renderData = () => {
        const { data } = this.props;

        if (data.loading) {
          return <Spinner styles={options && options.spinnerStyles} />;
        }
        if (data.error) return <h1>{data.error.message}</h1>;

        return <WrappedComponent data={data} {...this.props} />;
      };

      render() {
        return this.renderData();
      }
    }
  );

const withCategories = (WrappedComponent) =>
  handleQuery(WrappedComponent, GET_CATEGORIES);

const withProducts = (WrappedComponent, options) =>
  handleQuery(WrappedComponent, GET_CATEGORY_PRODUCTS, options);

const withCurrencies = (WrappedComponent, options) =>
  handleQuery(WrappedComponent, GET_CURRENCIES, options);

const withProductDetails = (WrappedComponent, options) =>
  handleQuery(WrappedComponent, GET_PRODUCT_DETAILS, options);

export {
  HttpProvider,
  withCategories,
  withProducts,
  withCurrencies,
  withProductDetails,
};
