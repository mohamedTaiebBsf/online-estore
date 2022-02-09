import React, { Component } from "react";
import {
  Container,
  Title,
  TotalItems,
  TotalPrice,
  Label,
  Price,
  Actions,
  Anchor,
} from "./styles";

class MiniCart extends Component {
  displayTotalItems = () => {
    let len = this.props.items.length;

    return `${len} product${len > 1 || len === 0 ? "s" : ""}`;
  };

  render() {
    return (
      <Container className={this.props.show && "open"}>
        <Title>
          My Bag, <TotalItems>{this.displayTotalItems()}</TotalItems>
        </Title>
        <TotalPrice>
          <Label>Total</Label>
          <Price>$100</Price>
        </TotalPrice>
        <Actions>
          <Anchor to="/cart">View Bag</Anchor>
        </Actions>
      </Container>
    );
  }
}

export default MiniCart;
