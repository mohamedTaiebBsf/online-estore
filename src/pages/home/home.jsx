import React, { Component } from "react";
import Layout from "../layout/layout";
import withNavigation from "../../hoc/navigation";
import { Title } from "./styles";
import Products from "../../components/products/products";

class Home extends Component {
  state = {
    selectedCategory: "",
    currentCurrency: "$",
    showCurrencies: false,
  };

  toggleCurrency = () => {
    this.setState((prevState) => ({
      showCurrencies: !prevState.showCurrencies,
    }));
  };

  switchCurrency = (symbol) => {
    this.setState({
      showCurrencies: false,
      currentCurrency: symbol,
    });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { params } = nextProps;

    if (Object.keys(params).length === 0) {
      return { selectedCategory: "all" };
    }

    return { selectedCategory: params.category };
  }

  render() {
    const { selectedCategory, currentCurrency, showCurrencies } = this.state;

    return (
      <Layout
        category={selectedCategory}
        current={currentCurrency}
        show={showCurrencies}
        toggle={this.toggleCurrency}
        switch={this.switchCurrency}
      >
        <Title>{selectedCategory}</Title>
        <Products
          category={selectedCategory}
          currentCurrency={currentCurrency}
        />
      </Layout>
    );
  }
}

export default withNavigation(Home);
