import React, { Component } from "react";
import {
  Container,
  Wrapper,
  ImageContainer,
  Image,
  Title,
  Price,
  CartContainer,
  CartIcon,
  Notif,
  Anchor,
} from "./styles";

class Product extends Component {
  displayPrice = (prices) => {
    const { currentCurrency } = this.props;

    const price = prices.find(
      (price) => currentCurrency === price.currency.symbol
    );

    return `${price.currency.symbol}${price.amount}`;
  };

  render() {
    const { gallery, brand, name, inStock, id, prices } = this.props.product;

    return (
      <Container $inStock={inStock}>
        <Wrapper>
          <Anchor to={`/product/${id}`}>
            <ImageContainer>
              <Image
                src={
                  gallery.length > 0
                    ? gallery[0]
                    : "/assets/images/no-images.png"
                }
                alt={name}
              />
              {!inStock && <Notif>Out Of Stock</Notif>}
            </ImageContainer>
          </Anchor>
          {inStock && (
            <CartContainer>
              <CartIcon src="/assets/images/cart-icon.svg" />
            </CartContainer>
          )}
        </Wrapper>
        <Anchor to={`/product/${id}`}>
          <Title>
            {brand} - {name}
          </Title>
        </Anchor>
        <Price>{this.displayPrice(prices)}</Price>
      </Container>
    );
  }
}

export default Product;
