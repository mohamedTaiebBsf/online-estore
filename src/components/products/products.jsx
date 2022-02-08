import React, { Component } from "react";
import Product from "./product/product";
import { withProducts } from "../../services/http-service";
import { connect } from "../../store";
import { Container } from "./styles";

class Products extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { categ, curr } = this.props;
    const { name } = this.props.data.category;

    if (
      categ !== nextProps.categ ||
      curr !== nextProps.curr ||
      name !== nextProps.data.category.name
    )
      return true;
    else return false;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("CDU:", prevProps.data.category.products);
  }

  render() {
    const { products } = this.props.data.category;
    console.log("Products", this.props, products);

    return (
      <Container>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            currentCurrency={this.props.curr}
          />
        ))}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  curr: state.currentCurrency,
  categ: state.selectedCategory,
});

export default connect(mapStateToProps)(
  withProducts(Products, (props) => {
    return {
      variables: {
        categoryName: props.categ,
      },
    };
  })
);
