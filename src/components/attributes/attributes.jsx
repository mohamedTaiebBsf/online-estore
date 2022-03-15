import React, { Component } from "react";
import Attribute from "./attribute/attribute";
import { isEmpty } from "../../utils";
import { Container } from "./styles";

class Attributes extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { attributes, selectedOptions } = this.props;

    if (
      nextProps.attributes !== attributes ||
      nextProps.selectedOptions !== selectedOptions
    )
      return true;

    return false;
  }

  render() {
    const { isCart, attributes, select, selectedOptions } = this.props;

    return (
      <Container $isCart={isCart}>
        {!isEmpty(attributes) &&
          attributes.map((attribute) => (
            <Attribute
              key={attribute.id}
              attribute={attribute}
              select={select}
              selectedOptions={selectedOptions}
              isCart={isCart}
            />
          ))}
      </Container>
    );
  }
}

export default Attributes;
