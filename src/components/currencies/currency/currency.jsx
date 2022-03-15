import React, { Component } from "react";
import { Container, Text } from "./styles";

class Currency extends Component {
  render() {
    const { currency, switch: switchCurr, active } = this.props;

    return (
      <Container
        onClick={() => switchCurr(currency.symbol)}
        className={active && "active"}
      >
        <Text>{currency.symbol}</Text>
        <Text>{currency.label}</Text>
      </Container>
    );
  }
}

export default Currency;
