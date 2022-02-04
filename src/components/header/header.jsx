import React, { Component } from "react";
import Categories from "../categories/categories";
import { connect } from "../../store";
import { Link } from "react-router-dom";
import {
  Container,
  Wrapper,
  Logo,
  CartContainer,
  CartIcon,
  CartBadge,
  CurrencySymbol,
  Arrows,
} from "./styles";
import Currencies from "../currencies/currencies";

class Header extends Component {
  render() {
    console.log("Header:", this.props.curr);
    return (
      <Container>
        <Wrapper>
          <Categories category={this.props.categ} />
          <Link to="/">
            <Logo src="/assets/images/app-logo.svg" alt="logo" />
          </Link>
          <Wrapper>
            <CurrencySymbol onClick={this.props.toggle}>
              {this.props.curr}
              <Arrows
                src="/assets/images/arrow.svg"
                alt="arrow"
                $show={this.props.showCurr}
              />
            </CurrencySymbol>
            <CartContainer>
              <CartIcon src="/assets/images/cart-icon.svg" />
              <CartBadge>2</CartBadge>
            </CartContainer>
          </Wrapper>
          <Currencies
            currency={this.props.curr}
            show={this.props.showCurr}
            switch={this.props.switch}
          />
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  curr: state.currentCurrency,
  showCurr: state.showCurrencies,
  categ: state.selectedCategory,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch({ type: "TOGGLE_CURRENCY" }),
  switch: (symbol) => dispatch({ type: "SWITCH_CURRENCY", payload: symbol }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
