import React, { Component } from "react";
import Header from "../../components/header/header";
import Container from "./styles";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header
          category={this.props.category}
          currency={this.props.current}
          show={this.props.show}
          toggle={this.props.toggle}
          switch={this.props.switch}
        />
        <Container>{this.props.children}</Container>
      </React.Fragment>
    );
  }
}

export default Layout;
