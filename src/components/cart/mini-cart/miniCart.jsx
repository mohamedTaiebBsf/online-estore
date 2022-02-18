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

    return `${currency}${format(total)}`;
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

  shouldComponentUpdate(nextProps, nextState) {
    const { showMiniCart, cartItems } = this.props;

    if (
      nextProps.showMiniCart !== showMiniCart ||
      nextProps.cartItems !== cartItems
    )
      return true;

    return false;
  }

  render() {
    const { showMiniCart, cartItems } = this.props;

    return (
      <Container className={showMiniCart && "open"}>
        <Title>
          My Bag, <TotalItems>{this.displayTotalItems()}</TotalItems>
        </Title>
        {this.renderProducts()}
        <Actions>
          <Anchor to="/cart" onClick={this.props.closeMiniCart}>
            View Bag
          </Anchor>
          <Anchor
            to="/checkout"
            disabled={isEmpty(cartItems)}
            onClick={this.props.closeMiniCart}
          >
            Check Out
          </Anchor>
        </Actions>
      </Container>
    );
  }
}

export default storeConsumer(MiniCart);
