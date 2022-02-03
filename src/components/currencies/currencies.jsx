import React, { Component } from "react";
import Currency from "./currency/currency";
import { withCurrencies } from "../../services/http-service";
import { Container } from "./styles";

class Currencies extends Component {
  render() {
    const { currencies } = this.props.data;

    return (
      <Container className={this.props.show && "open"}>
        {currencies.map((currency) => (
          <Currency
            key={currency.label}
            currency={currency}
            switch={this.props.switch}
            active={this.props.currency === currency.symbol}
          />
        ))}
      </Container>
    );
  }
}

export default withCurrencies(Currencies);
