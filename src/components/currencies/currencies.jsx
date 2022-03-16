import React, { Component } from "react";
import { withCurrencies } from "../../services/http-service";
import { storeConsumer } from "../../store";
import Currency from "./currency/currency";
import { Container, spinnerStyles } from "./styles";

class Currencies extends Component {
  curreniesRef = React.createRef();

  handleClickOutside = (event) => {
    const currToggDOM = document.getElementById("currency-toggler");
    const cartSymbolDOM = document.getElementById("cart-symbol");

    if (
      this.curreniesRef &&
      !this.curreniesRef.current.contains(event.target) &&
      currToggDOM !== event.target &&
      !currToggDOM.contains(event.target) &&
      cartSymbolDOM !== event.target
    ) {
      this.props.closeCurr();
    }
  };

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
      <Container className={showCurrency && "open"} ref={this.curreniesRef}>
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

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
}

export default storeConsumer(
  withCurrencies(Currencies, {
    name: "currenies",
    spinnerStyles,
  })
);
