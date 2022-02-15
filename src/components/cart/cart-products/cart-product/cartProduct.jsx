import React, { Component } from "react";
import Attributes from "../../../attributes/attributes";
import {
  Container,
  Column,
  Brand,
  Name,
  Price,
  ImageWrapper,
  Image,
  Actions,
  Quantity,
  Button,
} from "./styles";

class CartProduct extends Component {
  render() {
    const {
      name,
      brand,
      prices,
      image,
      quantity,
      attributes,
      selectedOptions,
    } = this.props.product;

    return (
      <Container>
        <Column>
          <Brand>{brand}</Brand>
          <Name>{name}</Name>
          <Price>$15</Price>
          <Attributes attributes={attributes} isCart />
        </Column>
        <Column>
          <Actions>
            <Button>+</Button>
            <Quantity>{quantity}</Quantity>
            <Button>-</Button>
          </Actions>
          <ImageWrapper>
            <Image src={image} />
          </ImageWrapper>
        </Column>
      </Container>
    );
  }
}

export default CartProduct;
