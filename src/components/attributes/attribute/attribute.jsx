import React, { Component } from "react";
import Items from "./items/items";
import { Container, Title } from "./styles";

class Attribute extends Component {
  render() {
    const { name, items, id } = this.props.attribute;
    const { isCart, select, selectedOptions } = this.props;
    const isColor = name.toLowerCase() === "color";

    return (
      <Container className={isCart && "options-in-cart"} $isColor={isColor}>
        <Title>{name}: </Title>
        <Items
          items={items}
          isColor={isColor}
          select={select}
          selectedOptions={selectedOptions || []}
          attributeId={id}
          isCart={isCart}
        />
      </Container>
    );
  }
}

export default Attribute;
