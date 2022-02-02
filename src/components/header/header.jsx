import React, { Component } from "react";
import Categories from "../categories/categories";
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

class Header extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Categories category={this.props.category} />
          <Link to="/">
            <Logo src="/assets/images/app-logo.svg" alt="logo" />
          </Link>
          <Wrapper>
            <CurrencySymbol>
              $<Arrows src="/assets/images/arrow-down.svg" alt="arrow" />
            </CurrencySymbol>
            <CartContainer>
              <CartIcon src="/assets/images/cart-icon.svg" />
              <CartBadge>2</CartBadge>
            </CartContainer>
          </Wrapper>
        </Wrapper>
      </Container>
    );
  }
}

export default Header;
