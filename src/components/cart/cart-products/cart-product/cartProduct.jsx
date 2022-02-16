import React, { Component } from "react";
import Attributes from "../../../attributes/attributes";
import { connect } from "../../../../store";
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
} from "./styles";

class CartProduct extends Component {
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
        <Column>
          <Brand>{brand}</Brand>
          <Name>{name}</Name>
          <Price>{displayPrice(prices, this.props.curr)}</Price>
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

const mapStateToProps = (state) => ({
  curr: state.currentCurrency,
});

const mapDispatchToProps = (dispatch) => ({
  increaseQty: (productId) =>
    dispatch({ type: "INCREASE_QUANTITY", payload: productId }),
  decreaseQty: (productId) =>
    dispatch({ type: "DECREASE_QUANTITY", payload: productId }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);
