import React, { Component } from "react";
import Layout from "../layout/layout";
import CartProducts from "../../components/cart/cart-products/cartProducts";
import * as cartService from "../../services/cart-service";
import { storeConsumer } from "../../store";
import { isEmpty } from "../../utils";
import {
  Title,
  Wrapper,
  TotalPrice,
  Label,
  Price,
  Anchor,
  Image,
  Remark,
  Button,
  TrashIcon,
} from "./styles";

class Cart extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { currency, cartItems } = this.props;

    if (nextProps.currency !== currency || nextProps.cartItems !== cartItems)
      return true;

    return false;
  }

  renderCart = () => {
    const { cartItems, currency } = this.props;

    if (!isEmpty(cartItems)) {
      return (
        <React.Fragment>
          <CartProducts products={cartItems} isCart />
          <Wrapper>
            <TotalPrice>
              <Label>Total: </Label>
              <Price>{cartService.totalPrice(cartItems, currency)}</Price>
            </TotalPrice>
            <Anchor to="/checkout">Check Out</Anchor>
          </Wrapper>
        </React.Fragment>
      );
    }

    return (
      <Wrapper className="empty-cart">
        <Image src="/assets/images/empty-cart-image.svg" alt="empty-cart" />
        <Title className="empty-cart">Your Cart is empty!</Title>
        <Remark>Browse our categories and discover our best offers</Remark>
        <Anchor to="/" className="shopping">
          Start Shopping
        </Anchor>
      </Wrapper>
    );
  };

  render() {
    const { cartItems } = this.props;

    return (
      <Layout>
        <Wrapper className="title-wrapper">
          <Title>Cart</Title>
          {!isEmpty(cartItems) && (
            <Button onClick={this.props.clearCart}>
              Clear
              <TrashIcon src="/assets/images/trash-icon.svg" alt="trash" />
            </Button>
          )}
        </Wrapper>
        {this.renderCart()}
      </Layout>
    );
  }
}

export default storeConsumer(Cart);
