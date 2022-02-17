import React, { Component } from "react";
import CartProducts from "../cart-products/cartProducts";
import { storeConsumer } from "../../../store";
import { isEmpty, pluralize, format } from "../../../utils";
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
    const { cartItems } = this.props;

    return `${cartItems.length} ${pluralize(cartItems.length, "product")}`;
  };

  displayTotalPrice = () => {
    const { cartItems, currency } = this.props;
    let total = 0;

    cartItems.forEach((item) => {
      const price = item.prices.find(
        (price) => currency === price.currency.symbol
      );
      if (price) total += price.amount * item.quantity;
    });

    return format(total);
  };

  renderProducts = () => {
    const { cartItems } = this.props;

    if (!isEmpty(cartItems)) {
      return (
        <React.Fragment>
          <CartProducts products={cartItems} />
          <TotalPrice>
            <Label>Total</Label>
            <Price>{this.displayTotalPrice()}</Price>
          </TotalPrice>
        </React.Fragment>
      );
    }

    return <Title className="empty-cart">Your Cart is empty!</Title>;
  };

  render() {
    const { show, cartItems } = this.props;

    return (
      <Container className={show && "open"}>
        <Title>
          My Bag, <TotalItems>{this.displayTotalItems()}</TotalItems>
        </Title>
        {this.renderProducts()}
        <Actions>
          <Anchor to="/cart">View Bag</Anchor>
          <Anchor to="/checkout" disabled={isEmpty(cartItems)}>
            Check Out
          </Anchor>
        </Actions>
      </Container>
    );
  }
}

export default storeConsumer(MiniCart);
