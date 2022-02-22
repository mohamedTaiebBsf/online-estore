import React, { Component } from "react";
import Currency from "./currency/currency";
import { withCurrencies } from "../../services/http-service";
import { storeConsumer } from "../../store";
import { Container, spinnerStyles } from "./styles";

class Currencies extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { currency, showCurrency } = this.props;

    if (
      nextProps.currency !== currency ||
      nextProps.showCurrency !== showCurrency
    )
      return true;

    return false;
  }

  render() {
    const { currencies } = this.props.data;

    return (
      <Container className={this.props.showCurrency && "open"}>
        {currencies.map((currency) => (
          <Currency
            key={currency.label}
            currency={currency}
            switch={this.props.switchCurr}
            active={this.props.currency === currency.symbol}
          />
        ))}
      </Container>
    );
  }
}

export default storeConsumer(
  withCurrencies(Currencies, {
    name: "currenies",
    spinnerStyles,
  })
);
