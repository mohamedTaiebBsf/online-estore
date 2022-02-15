import React, { Component } from "react";
import Attribute from "./attribute/attribute";
import { Container } from "./styles";

class Attributes extends Component {
  render() {
    return (
      <Container $isCart={this.props.isCart}>
        {this.props.attributes.length > 0 &&
          this.props.attributes.map((attribute) => (
            <Attribute
              key={attribute.id}
              attribute={attribute}
              select={this.props.select}
              selectedOptions={this.props.selectedOptions}
              isCart={this.props.isCart}
            />
          ))}
      </Container>
    );
  }
}

export default Attributes;
