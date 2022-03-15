import React, { Component } from "react";
import CartProduct from "./cart-product/cartProduct";
import { Container } from "./styles";

class CartProducts extends Component {
  render() {
    const { products, isCart } = this.props;

    return (
      <Container>
        {products.map((product) => (
          <CartProduct key={product.id} product={product} isCart={isCart} />
        ))}
      </Container>
    );
  }
}

export default CartProducts;
