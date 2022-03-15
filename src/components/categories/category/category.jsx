import React, { Component } from "react";
import { Anchor, Container } from "./styles";

class Category extends Component {
  categClicked = () => {
    const { category, sideDrawerClose, setCateg } = this.props;

    if (sideDrawerClose) {
      sideDrawerClose();
    }

    setCateg(category.name);
  };

  render() {
    const { category, active } = this.props;

    return (
      <Container className={active && "active"} onClick={this.categClicked}>
        <Anchor to={`/?${category.name}`}>{category.name}</Anchor>
      </Container>
    );
  }
}

export default Category;
