import React, { Component } from "react";
import { Container, Text } from "./styles";

class Currency extends Component {
  render() {
    const { symbol, label } = this.props.currency;

    return (
      <Container>
        <Text>{symbol}</Text>
        <Text>{label}</Text>
      </Container>
    );
  }
}

export default Currency;
