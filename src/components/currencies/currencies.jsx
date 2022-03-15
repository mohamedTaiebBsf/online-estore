import React, { Component } from "react";
import { withCurrencies } from "../../services/http-service";
import { storeConsumer } from "../../store";
import Currency from "./currency/currency";
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
    const { data, currency: curr, showCurrency, switchCurr } = this.props;
    const { currencies } = data;

    return (
      <Container className={showCurrency && "open"}>
        {currencies.map((currency) => (
          <Currency
            key={currency.label}
            currency={currency}
            switch={switchCurr}
            active={curr === currency.symbol}
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
