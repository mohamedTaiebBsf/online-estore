import React, { Component } from "react";
import { Container, Title, Items, Item } from "./styles";

class Attribute extends Component {
  render() {
    const { name, items } = this.props.attribute;
    const isColor = name === "Color";

    return (
      <Container>
        <Title>{name}: </Title>
        <Items>
          {items.map((item) => (
            <Item key={item.id} $isColor={isColor && item.value}>
              {!isColor && item.value}
            </Item>
          ))}
        </Items>
      </Container>
    );
  }
}

export default Attribute;
