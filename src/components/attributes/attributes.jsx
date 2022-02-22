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
    return (
      <Container $isCart={this.props.isCart}>
        {!isEmpty(this.props.attributes) &&
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
