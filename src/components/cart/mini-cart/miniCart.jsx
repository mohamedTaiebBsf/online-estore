import React, { Component } from "react";
import { connect } from "../../../store";
import CartProducts from "../cart-products/cartProducts";
import {
  Container,
  Title,
  TotalItems,
  TotalPrice,
  Label,
  Price,
  Actions,
  Anchor,
} from "./styles";

class MiniCart extends Component {
  displayTotalItems = () => {
    let len = this.props.items.length;

    return `${len} product${len > 1 || len === 0 ? "s" : ""}`;
  };

  render() {
    return (
      <Container className={this.props.show && "open"}>
        <Title>
          My Bag, <TotalItems>{this.displayTotalItems()}</TotalItems>
        </Title>
        <CartProducts products={this.props.cartItems} />
        <TotalPrice>
          <Label>Total</Label>
          <Price>$100</Price>
        </TotalPrice>
        <Actions>
          <Anchor to="/cart">View Bag</Anchor>
        </Actions>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cartProducts,
});

// export default MiniCart;
export default connect(mapStateToProps)(MiniCart);
