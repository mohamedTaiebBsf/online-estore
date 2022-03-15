import React, { Component } from "react";
import { Bar, Container } from "./styles";

class SideToggle extends Component {
  render() {
    const { open, toggleSide } = this.props;

    return (
      <Container onClick={toggleSide} className={open && "open"}>
        <Bar />
      </Container>
    );
  }
}

export default SideToggle;
