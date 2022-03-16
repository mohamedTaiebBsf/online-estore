import React, { Component } from "react";
import { withCategories } from "../../services/http-service";
import { storeConsumer } from "../../store";
import Category from "./category/category";
import { Container } from "./styles";

class Categories extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { categ } = this.props;

    if (nextProps.categ !== categ) return true;

    return false;
  }

  render() {
    const { data, categ, setCategory, sideDrawerClose } = this.props;
    const { categories } = data;

    return (
      <Container>
        {categories.map((category, index) => (
          <Category
            key={index}
            category={category}
            active={categ === category.name}
            setCateg={setCategory}
            sideDrawerClose={sideDrawerClose}
          />
        ))}
      </Container>
    );
  }
}

export default storeConsumer(
  withCategories(Categories, {
    name: "categories",
  })
);
