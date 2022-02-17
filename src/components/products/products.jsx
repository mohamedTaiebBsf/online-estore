import React, { Component } from "react";
import Product from "./product/product";
import { withProducts } from "../../services/http-service";
import { storeConsumer } from "../../store";
import { Container } from "./styles";

class Products extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { categ, curr } = this.props;
    const { name } = this.props.data.category;

    if (
      categ !== nextProps.categ ||
      curr !== nextProps.curr ||
      name !== nextProps.data.category.name
    )
      return true;
    else return false;
  }

  render() {
    const { products } = this.props.data.category;
    console.log("Products", products);

    return (
      <Container>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            currentCurrency={this.props.currency}
            add={this.props.addToCart}
            update={this.props.increaseQty}
          />
        ))}
      </Container>
    );
  }
}

export default storeConsumer(
  withProducts(Products, (props) => {
    return {
      variables: {
        categoryName: props.categ,
      },
    };
  })
);
