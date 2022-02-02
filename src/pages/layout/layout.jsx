import React, { Component } from "react";
import Header from "../../components/header/header";
import Container from "./styles";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header category={this.props.category} />
        <Container>{this.props.children}</Container>
      </React.Fragment>
    );
  }
}

export default Layout;
