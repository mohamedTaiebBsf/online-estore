import React, { Component } from "react";
import { Container, Anchor } from "./styles";

class Category extends Component {
  categClicked = () => {
    const { name } = this.props.category;

    if (this.props.sideDrawerClose) {
      this.props.sideDrawerClose();
    }

    this.props.setCateg(name);
  };

  render() {
    const { name } = this.props.category;

    return (
      <Container
        className={this.props.active && "active"}
        onClick={this.categClicked}
      >
        <Anchor to={`/?${name}`}>{name}</Anchor>
      </Container>
    );
  }
}

export default Category;
