import React, { Component } from "react";
import Currency from "./currency/currency";
import { withCurrencies } from "../../services/http-service";
import { Container } from "./styles";

class Currencies extends Component {
  render() {
    const { currencies } = this.props.data;

    return (
      <Container>
        {currencies.map((currency) => (
          <Currency key={currency.label} currency={currency} />
        ))}
      </Container>
    );
  }
}

export default withCurrencies(Currencies);
