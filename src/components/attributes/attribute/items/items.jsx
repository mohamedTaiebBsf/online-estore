import React, { Component } from "react";
import Item from "./item/item";
import Container from "./styles";

class Items extends Component {
  selectOption = (option) => {
    const { select, attributeId } = this.props;

    if (select) {
      select(attributeId, option.id);
    }
  };

  isActive = (itemId) => {
    const { selectedOptions, attributeId } = this.props;

    return selectedOptions.some(
      (item) => item.selectItem === itemId && item.id === attributeId
    );
  };

  render() {
    const { items, isColor, isCart } = this.props;

    return (
      <Container>
        {items.map((item) => (
          <Item
            key={item.id}
            isColor={isColor && item.value}
            selected={this.isActive(item.id)}
            select={!isCart ? () => this.selectOption(item) : null}
          >
            {!isColor && item.value}
          </Item>
        ))}
      </Container>
    );
  }
}

export default Items;
