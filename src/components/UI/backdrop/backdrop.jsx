import React, { Component } from "react";
import Container from "./styles";

class Backdrop extends Component {
  render() {
    return this.props.show ? <Container onClick={this.props.clicked} /> : null;
  }
}

export default Backdrop;
