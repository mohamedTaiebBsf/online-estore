import React, { Component } from "react";
import * as productService from "../../../services/product-service";
import { isEmpty } from "../../../utils";
import {
  Anchor,
  CartContainer,
  CartIcon,
  Container,
  Image,
  ImageContainer,
  Notif,
  Price,
  Title,
  Wrapper,
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
    const { product, add, currentCurrency } = this.props;
    const { gallery, brand, name, inStock, id, prices } = product;

    return (
      <React.Fragment>
        <Container $inStock={inStock}>
          <Wrapper>
            <Anchor to={`/product/${id}`}>
              <ImageContainer>
                <Image
                  src={
                    !isEmpty(gallery)
                      ? gallery[0]
                      : "/assets/images/no-images.png"
                  }
                  alt={name}
                />
                {!inStock && <Notif>Out Of Stock</Notif>}
              </ImageContainer>
            </Anchor>
            {inStock && (
              <CartContainer onClick={add}>
                <CartIcon src="/assets/images/cart-icon.svg" />
              </CartContainer>
            )}
          </Wrapper>
          <Anchor to={`/product/${id}`}>
            <Title>
              {brand} - {name}
            </Title>
          </Anchor>
          <Price>{productService.price(prices, currentCurrency)}</Price>
        </Container>
      </React.Fragment>
    );
  }
}

export default Product;
