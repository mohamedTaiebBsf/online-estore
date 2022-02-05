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
import { displayPrice } from "../../../utils";

class Product extends Component {
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
        <Price>{displayPrice(prices, this.props.currentCurrency)}</Price>
      </Container>
    );
  }
}

export default Product;
