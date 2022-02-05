import React, { Component } from "react";
import Attribute from "./attribute/attribute";
import { Container } from "./styles";

class Attributes extends Component {
  render() {
    return (
      <Container>
        {this.props.attributes.length > 0 &&
          this.props.attributes.map((attribute) => (
            <Attribute key={attribute.id} attribute={attribute} />
          ))}
      </Container>
    );
  }
}

export default Attributes;
