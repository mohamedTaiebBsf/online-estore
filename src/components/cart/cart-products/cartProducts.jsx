import React, { Component } from "react";
import CartProduct from "./cart-product/cartProduct";
import { Container } from "./styles";

class CartProducts extends Component {
  render() {
    return (
      <Container>
        {this.props.products.map((product) => (
          <CartProduct
            key={product.id}
            product={product}
            isCart={this.props.isCart}
          />
        ))}
      </Container>
    );
  }
}

export default CartProducts;
