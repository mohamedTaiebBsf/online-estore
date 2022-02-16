import React, { Component } from "react";
import Layout from "../layout/layout";
import CartProducts from "../../components/cart/cart-products/cartProducts";
import {
  Title,
  Wrapper,
  TotalPrice,
  Label,
  Price,
  Anchor,
  Image,
  Remark,
} from "./styles";
import { connect } from "../../store";
import { isEmpty, format } from "../../utils";

class Cart extends Component {
  displayTotalPrice = () => {
    const { cartItems, curr } = this.props;
    let total = 0;

    cartItems.forEach((item) => {
      const price = item.prices.find((price) => curr === price.currency.symbol);
      if (price) total += price.amount * item.quantity;
    });

    return format(total);
  };

  renderCart = () => {
    const { cartItems } = this.props;

    if (!isEmpty(cartItems)) {
      return (
        <React.Fragment>
          <CartProducts products={cartItems} isCart />
          <Wrapper>
            <TotalPrice>
              <Label>Total: </Label>
              <Price>{this.displayTotalPrice()}</Price>
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
    return (
      <Layout>
        <Title>Cart</Title>
        {this.renderCart()}
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cartProducts,
  curr: state.currentCurrency,
});

export default connect(mapStateToProps)(Cart);
