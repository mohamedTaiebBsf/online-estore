import React, { Component } from "react";
import Categories from "../categories/categories";
import Currencies from "../currencies/currencies";
import MiniCart from "../cart/mini-cart/miniCart";
import { Link } from "react-router-dom";
import { storeConsumer } from "../../store";
import { isEmpty } from "../../utils";
import {
  Container,
  Wrapper,
  Logo,
  CartContainer,
  CartIcon,
  CartBadge,
  CurrencySymbol,
  Arrow,
} from "./styles";

class Header extends Component {
  displayBadgeTotal = () => {
    const { cartItems } = this.props;
    let total = 0;

    cartItems.forEach((item) => {
      total += item.quantity;
    });

    return total;
  };

  render() {
    return (
      <Container>
        <Wrapper>
          <Categories category={this.props.categ} />
          <Link to="/" onClick={() => this.props.setCateg("all")}>
            <Logo src="/assets/images/app-logo.svg" alt="logo" />
          </Link>
          <Wrapper>
            <CurrencySymbol onClick={this.props.toggleCurr}>
              {this.props.currency}
              <Arrow
                src="/assets/images/arrow.svg"
                alt="arrow"
                $show={this.props.showCurrency}
              />
            </CurrencySymbol>
            <CartContainer onClick={this.props.toggleMiniCart}>
              <CartIcon src="/assets/images/cart-icon.svg" />
              {!isEmpty(this.props.cartItems) && (
                <CartBadge>{this.displayBadgeTotal()}</CartBadge>
              )}
            </CartContainer>
          </Wrapper>
          <Currencies
            currency={this.props.currency}
            show={this.props.showCurrency}
            switch={this.props.switchCurr}
          />
          <MiniCart
            show={this.props.showMiniCart}
            cartItems={this.props.cartItems}
          />
        </Wrapper>
      </Container>
    );
  }
}

export default storeConsumer(Header);
