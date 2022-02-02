import React, { Component } from "react";
import Spinner from "../components/UI/spinner/spinner";
import { GET_CATEGORIES } from "../schemas/categorySchema";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";

const client = new ApolloClient({
  uri: process.env.REACT_APP_BACKEND_URL,
  cache: new InMemoryCache({ addTypename: true }),
});

const HttpProvider = class extends Component {
  render() {
    return (
      <ApolloProvider client={client}>{this.props.children}</ApolloProvider>
    );
  }
};

const handleQuery = (WrappedComponent, schema) =>
  graphql(schema)(
    class extends Component {
      renderData = () => {
        const { data } = this.props;

        if (data.loading) return <Spinner />;
        if (data.error) return <h1>{data.error.message}</h1>;

        return <WrappedComponent data={data} />;
      };

      render() {
        return this.renderData();
      }
    }
  );

const withCategories = (WrappedCompoent) =>
  handleQuery(WrappedCompoent, GET_CATEGORIES);

export { HttpProvider, withCategories };
