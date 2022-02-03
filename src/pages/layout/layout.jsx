import React, { Component } from "react";
import Header from "../../components/header/header";
import Container from "./styles";

class Layout extends Component {
  state = {
    currentCurrency: "$",
  };

  render() {
    return (
      <React.Fragment>
        <Header
          category={this.props.category}
          currency={this.state.currentCurrency}
        />
        <Container>{this.props.children}</Container>
      </React.Fragment>
    );
  }
}

export default Layout;
