import React, { Component } from "react";
import { Container, Title } from "./styles";
// import { Container, Title, Items, Item } from "./styles";
import Items from "./items/items";

class Attribute extends Component {
  render() {
    const { name, items, id } = this.props.attribute;
    const isColor = name.toLowerCase() === "color";

    return (
      <Container>
        <Title>{name}: </Title>
        <Items
          items={items}
          isColor={isColor}
          select={this.props.select}
          selectedOptions={this.props.selectedOptions || []}
          attributeId={id}
        />
      </Container>
    );
  }
}

export default Attribute;
