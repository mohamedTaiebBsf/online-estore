import React, { Component } from "react";
import Category from "./category/category";
import { withCategories } from "../../services/http-service";
import { Container } from "./styles";
class Categories extends Component {
  render() {
    const { categories } = this.props.data;

    return (
      <Container>
        {categories.map((category, index) => (
          <Category
            key={index}
            category={category}
            active={"clothes" === category.name}
          />
        ))}
      </Container>
    );
  }
}

export default withCategories(Categories);
