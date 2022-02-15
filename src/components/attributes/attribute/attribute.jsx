import React, { Component } from "react";
import { Container, Title } from "./styles";
// import { Container, Title, Items, Item } from "./styles";
import Items from "./items/items";

class Attribute extends Component {
  render() {
    const { name, items, id } = this.props.attribute;
    const isColor = name.toLowerCase() === "color";
    console.log("isCart:", this.props.isCart);

    return (
      <Container
        className={this.props.isCart && "options-in-cart"}
        $isColor={isColor}
      >
        <Title>{name}: </Title>
        <Items
          items={items}
          isColor={isColor}
          select={this.props.select}
          selectedOptions={this.props.selectedOptions || []}
          attributeId={id}
          isCart={this.props.isCart}
        />
      </Container>
    );
  }
}

export default Attribute;
