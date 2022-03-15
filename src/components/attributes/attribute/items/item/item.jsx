import React, { Component } from "react";
import { Container } from "./styles";

class Item extends Component {
  render() {
    const { select, selected, isColor, children } = this.props;

    return (
      <Container onClick={select} $selected={selected} $isColor={isColor}>
        {children}
      </Container>
    );
  }
}

export default Item;
