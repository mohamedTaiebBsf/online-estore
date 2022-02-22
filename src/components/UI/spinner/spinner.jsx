import React, { Component } from "react";
import Container from "./styles";

class Spinner extends Component {
  render() {
    return <Container style={this.props.styles} />;
  }
}

export default Spinner;
