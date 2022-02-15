import React, { Component } from "react";
import { Container } from "./styles";

class Item extends Component {
  render() {
    return (
      <Container
        onClick={this.props.select}
        $selected={this.props.selected}
        $isColor={this.props.isColor}
      >
        {this.props.children}
      </Container>
    );
  }
}

export default Item;
