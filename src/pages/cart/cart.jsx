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
  Button,
  TrashIcon,
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

const mapStateToProps = (state) => ({
  cartItems: state.cartProducts,
  curr: state.currentCurrency,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch({ type: "CLEAR_CART" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
