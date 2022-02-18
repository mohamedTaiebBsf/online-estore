import React, { Component } from "react";
import Attributes from "../../../attributes/attributes";
import { storeConsumer } from "../../../../store";
import { displayPrice } from "../../../../utils";
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
      id,
      name,
      brand,
      prices,
      image,
      quantity,
      attributes,
      selectedOptions,
    } = this.props.product;

    return (
      <Container $isCart={this.props.isCart}>
        <TrashIcon
          onClick={() => this.props.removeFromCart(id)}
          src="/assets/images/trash-icon.svg"
          alt="trash"
        />
        <Column>
          <Brand>{brand}</Brand>
          <Name>{name}</Name>
          <Price>{displayPrice(prices, this.props.currency)}</Price>
          <Attributes
            attributes={attributes}
            selectedOptions={selectedOptions}
            isCart
          />
        </Column>
        <Column>
          <Actions>
            <Button onClick={() => this.props.increaseQty(id)}>+</Button>
            <Quantity>{quantity}</Quantity>
            <Button onClick={() => this.props.decreaseQty(id)}>-</Button>
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
