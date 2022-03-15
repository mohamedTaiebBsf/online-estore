import React, { Component } from "react";
import * as cartService from "../../services/cart-service";
import { storeConsumer } from "../../store";
import { isEmpty } from "../../utils";
import MiniCart from "../cart/mini-cart/miniCart";
import Categories from "../categories/categories";
import Currencies from "../currencies/currencies";
import SideToggle from "../side-drawer/side-toggle/sideToggle";
import Logo from "../UI/logo/logo";
import {
  Arrow,
  CartBadge,
  CartContainer,
  CartIcon,
  Container,
  CurrencySymbol,
  LogoWrapper,
  Wrapper,
} from "./styles";

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
    const { showMiniCart, closeMiniCart, toggleCurr } = this.props;

    if (showMiniCart) {
      closeMiniCart();
    }

    toggleCurr();
  };

  toggleMiniCart = () => {
    const { showCurrency, closeCurr, toggleMiniCart } = this.props;

    if (showCurrency) {
      closeCurr();
    }

    toggleMiniCart();
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
    const {
      onSideDrawerClick,
      openSideDrawer,
      browserSize,
      setCateg,
      currency,
      showCurrency,
      cartItems,
    } = this.props;

    return (
      <Container>
        <Wrapper>
          <SideToggle toggleSide={onSideDrawerClick} open={openSideDrawer} />
          {browserSize > 550 && <Categories />}
          <LogoWrapper>
            <Logo onClick={() => setCateg("all")} />
          </LogoWrapper>
          <Wrapper>
            <CurrencySymbol onClick={this.toggleCurrency}>
              {currency}
              <Arrow
                src="/assets/images/arrow.svg"
                alt="arrow"
                $show={showCurrency}
              />
            </CurrencySymbol>
            <CartContainer onClick={this.toggleMiniCart}>
              <CartIcon src="/assets/images/cart-icon.svg" />
              {!isEmpty(cartItems) && (
                <CartBadge>{cartService.countItems(cartItems)}</CartBadge>
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
