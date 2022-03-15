import React, { Component } from "react";
import * as productService from "../../../../services/product-service";
import { storeConsumer } from "../../../../store";
import Attributes from "../../../attributes/attributes";
import {
  Actions,
  Brand,
  Button,
  Column,
  Container,
  Image,
  ImageWrapper,
  Name,
  Price,
  Quantity,
  TrashIcon,
} from "./styles";

class CartProduct extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { currency, product } = this.props;

    if (
      nextProps.currency !== currency ||
      nextProps.product.quantity !== product.quantity
    )
      return true;

    return false;
  }

  render() {
    const {
      isCart,
      product,
      currency,
      removeFromCart,
      increaseQty,
      decreaseQty,
    } = this.props;

    const {
      id,
      name,
      brand,
      prices,
      image,
      quantity,
      attributes,
      selectedOptions,
    } = product;

    return (
      <Container $isCart={isCart}>
        <TrashIcon
          onClick={() => removeFromCart(id)}
          src="/assets/images/trash-icon.svg"
          alt="trash"
        />
        <Column>
          <Brand>{brand}</Brand>
          <Name>{name}</Name>
          <Price>{productService.price(prices, currency)}</Price>
          <Attributes
            attributes={attributes}
            selectedOptions={selectedOptions}
            isCart
          />
        </Column>
        <Column>
          <Actions>
            <Button onClick={() => increaseQty(id)}>+</Button>
            <Quantity>{quantity}</Quantity>
            <Button onClick={() => decreaseQty(id)}>-</Button>
          </Actions>
          <ImageWrapper>
            <Image src={image} />
          </ImageWrapper>
        </Column>
      </Container>
    );
  }
}

export default storeConsumer(CartProduct);
