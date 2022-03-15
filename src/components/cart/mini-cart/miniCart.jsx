import React, { Component } from "react";
import * as cartService from "../../../services/cart-service";
import { storeConsumer } from "../../../store";
import { isEmpty, pluralize } from "../../../utils";
import CartProducts from "../cart-products/cartProducts";
import {
  Actions,
  Anchor,
  Container,
  Label,
  Price,
  Title,
  TotalItems,
  TotalPrice,
} from "./styles";

class MiniCart extends Component {
  displayTitle = () => {
    const { cartItems } = this.props;

    return `${cartItems.length} ${pluralize(cartItems.length, "product")}`;
  };

  renderProducts = () => {
    const { cartItems, currency } = this.props;

    if (!isEmpty(cartItems)) {
      return (
        <React.Fragment>
          <CartProducts products={cartItems} />
          <TotalPrice>
            <Label>Total</Label>
            <Price>{cartService.totalPrice(cartItems, currency)}</Price>
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
    const { showMiniCart, cartItems, closeMiniCart } = this.props;

    return (
      <Container className={showMiniCart && "open"}>
        <Title>
          My Bag, <TotalItems>{this.displayTitle()}</TotalItems>
        </Title>
        {this.renderProducts()}
        <Actions>
          <Anchor to="/cart" onClick={closeMiniCart}>
            View Bag
          </Anchor>
          <Anchor
            to="/checkout"
            disabled={isEmpty(cartItems)}
            onClick={closeMiniCart}
          >
            Check Out
          </Anchor>
        </Actions>
      </Container>
    );
  }
}

export default storeConsumer(MiniCart);
