import React, { Component } from "react";
import Category from "./category/category";
import { withCategories } from "../../services/http-service";
import { storeConsumer } from "../../store";
import { Container } from "./styles";

class Categories extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { categ } = this.props;

    if (nextProps.categ !== categ) return true;

    return false;
  }

  render() {
    const { categories } = this.props.data;

    return (
      <Container>
        {categories.map((category, index) => (
          <Category
            key={index}
            category={category}
            active={this.props.categ === category.name}
            setCateg={this.props.setCateg}
          />
        ))}
      </Container>
    );
  }
}

export default storeConsumer(withCategories(Categories));
