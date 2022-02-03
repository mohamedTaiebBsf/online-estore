import React, { Component } from "react";
import Spinner from "../components/UI/spinner/spinner";
import {
  GET_CATEGORIES,
  GET_CATEGORY_PRODUCTS,
} from "../schemas/categorySchema";
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
    options: options,
  })(
    class extends Component {
      renderData = () => {
        const { data } = this.props;

        if (data.loading) return <Spinner />;
        if (data.error) return <h1>{data.error.message}</h1>;

        return <WrappedComponent data={data} {...this.props} />;
      };

      render() {
        return this.renderData();
      }
    }
  );

const withCategories = (WrappedCompoent) =>
  handleQuery(WrappedCompoent, GET_CATEGORIES);

const withProducts = (WrappedCompoent, options) =>
  handleQuery(WrappedCompoent, GET_CATEGORY_PRODUCTS, options);

export { HttpProvider, withCategories, withProducts };
