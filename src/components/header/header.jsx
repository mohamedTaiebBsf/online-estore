import React, { Component } from "react";
import Categories from "../categories/categories";
import { connect } from "../../store";
import { isEmpty } from "../../utils";
import { Link } from "react-router-dom";
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
import Currencies from "../currencies/currencies";
import MiniCart from "../cart/mini-cart/miniCart";

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
          <Link to="/" onClick={() => this.props.setCurrentCategory("all")}>
            <Logo src="/assets/images/app-logo.svg" alt="logo" />
          </Link>
          <Wrapper>
            <CurrencySymbol onClick={this.props.toggleCurr}>
              {this.props.curr}
              <Arrow
                src="/assets/images/arrow.svg"
                alt="arrow"
                $show={this.props.showCurr}
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
            currency={this.props.curr}
            show={this.props.showCurr}
            switch={this.props.switch}
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

const mapStateToProps = (state) => ({
  curr: state.currentCurrency,
  showCurr: state.showCurrencies,
  showMiniCart: state.showMiniCart,
  categ: state.selectedCategory,
  cartItems: state.cartProducts,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCurr: () => dispatch({ type: "TOGGLE_CURRENCY" }),
  switch: (symbol) => dispatch({ type: "SWITCH_CURRENCY", payload: symbol }),
  toggleMiniCart: () => dispatch({ type: "TOGGLE_MINI_CART" }),
  setCurrentCategory: (category) =>
    dispatch({ type: "SET_SELECTED_CATEGORY", payload: category }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
