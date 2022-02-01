import React, { Component } from "react";
import Category from "./category/category";
import { Container } from "./styles";

const categories = [{ name: "all" }, { name: "clothes" }, { name: "tech" }];

class Categories extends Component {
  render() {
    // const { selectedCategory } = this.props;
    const selectedCategory = "clothes";
    return (
      <Container>
        {categories.map((category, index) => (
          <Category
            key={index}
            category={category}
            active={selectedCategory === category.name}
          />
        ))}
      </Container>
    );
  }
}

export default Categories;
