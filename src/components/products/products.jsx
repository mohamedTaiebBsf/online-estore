import React, { Component } from "react";
import { withProducts } from "../../services/http-service";

class Products extends Component {
  render() {
    const { products } = this.props.data.category;

    return products.map((product) => <h1 key={product.id}>{product.name}</h1>);
  }
}

export default withProducts(Products, (props) => {
  return {
    variables: {
      categoryName: props.category,
    },
  };
});
