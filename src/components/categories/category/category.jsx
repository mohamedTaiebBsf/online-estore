import React, { Component } from "react";
import { Container, Anchor } from "./styles";

class Category extends Component {
  render() {
    const { name } = this.props.category;

    return (
      <Container className={this.props.active && "active"}>
        <Anchor to={`/${name}`}>{name}</Anchor>
      </Container>
    );
  }
}

export default Category;
