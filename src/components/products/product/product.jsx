import React, { Component } from "react";
import { displayPrice } from "../../../utils";
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
  shouldComponentUpdate(nextProps, nextState) {
    const { product, currentCurrency } = this.props;

    if (
      nextProps.product.id !== product.id ||
      nextProps.currentCurrency !== currentCurrency
    )
      return true;

    return false;
  }
  render() {
    const { gallery, brand, name, inStock, id, prices } = this.props.product;

    return (
      <React.Fragment>
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
              <CartContainer onClick={this.props.add}>
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
      </React.Fragment>
    );
  }
}

export default Product;
