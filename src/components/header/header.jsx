import React, { Component } from "react";
import Categories from "../categories/categories";
import Currencies from "../currencies/currencies";
import MiniCart from "../cart/mini-cart/miniCart";
import * as cartService from "../../services/cart-service";
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
import SideToggle from "../side-drawer/side-toggle/sideToggle";

class Header extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  toggleCurrency = () => {
    const { showMiniCart } = this.props;

    if (showMiniCart) {
      this.props.closeMiniCart();
    }

    this.props.toggleCurr();
  };

  toggleMiniCart = () => {
    const { showCurrency } = this.props;

    if (showCurrency) {
      this.props.closeCurr();
    }

    this.props.toggleMiniCart();
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { currency, showCurrency, cartItems, openSideDrawer, browserSize } =
      this.props;

    if (
      nextProps.currency !== currency ||
      nextProps.showCurrency !== showCurrency ||
      nextProps.cartItems !== cartItems ||
      nextProps.openSideDrawer !== openSideDrawer ||
      nextProps.browserSize !== browserSize
    )
      return true;

    return false;
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <SideToggle
            toggleSide={this.props.onSideDrawerClick}
            open={this.props.openSideDrawer}
          />
          {this.props.browserSize > 550 && <Categories />}
          <Link to="/" onClick={() => this.props.setCateg("all")}>
            <Logo src="/assets/images/app-logo.svg" alt="logo" />
          </Link>
          <Wrapper>
            <CurrencySymbol onClick={this.toggleCurrency}>
              {this.props.currency}
              <Arrow
                src="/assets/images/arrow.svg"
                alt="arrow"
                $show={this.props.showCurrency}
              />
            </CurrencySymbol>
            <CartContainer onClick={this.toggleMiniCart}>
              <CartIcon src="/assets/images/cart-icon.svg" />
              {!isEmpty(this.props.cartItems) && (
                <CartBadge>
                  {cartService.countItems(this.props.cartItems)}
                </CartBadge>
              )}
            </CartContainer>
          </Wrapper>
          <Currencies />
          <MiniCart />
        </Wrapper>
      </Container>
    );
  }
}

export default storeConsumer(Header);
