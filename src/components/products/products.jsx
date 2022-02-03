import React, { Component } from "react";
import Product from "./product/product";
import { withProducts } from "../../services/http-service";
import { Container } from "./styles";

class Products extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { category, currentCurrency } = this.props;
    const { name } = this.props.data.category;

    if (
      category !== nextProps.category ||
      currentCurrency !== nextProps.currentCurrency ||
      name !== nextProps.data.category.name
    )
      return true;
    else return false;
  }

  render() {
    const { products } = this.props.data.category;
    console.log(products);

    return (
      <Container>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            currentCurrency={this.props.currentCurrency}
          />
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
