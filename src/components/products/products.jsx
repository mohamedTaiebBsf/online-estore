import React, { Component } from "react";
import Product from "./product/product";
import { withProducts } from "../../services/http-service";
import { Container } from "./styles";

class Products extends Component {
  render() {
    const { products } = this.props.data.category;

    return (
      <Container>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Container>
    );
  }
}

export default withProducts(Products, (props) => {
  return {
    variables: {
      categoryName: props.category,
    },
  };
});
