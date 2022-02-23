import React, { Component } from "react";
import { Container, Bar } from "./styles";

class SideToggle extends Component {
  render() {
    return (
      <Container
        onClick={this.props.toggleSide}
        className={this.props.open && "open"}
      >
        <Bar />
      </Container>
    );
  }
}

export default SideToggle;
