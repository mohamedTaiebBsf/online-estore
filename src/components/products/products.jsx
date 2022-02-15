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

  render() {
    const { products } = this.props.data.category;
    console.log("Products", products);

    return (
      <Container>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            currentCurrency={this.props.curr}
            add={this.props.add}
            update={this.props.updateQty}
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

const mapDispatchToProps = (dispatch) => ({
  add: (product) => dispatch({ type: "ADD_TO_CART", payload: product }),
  updateQty: (productId) =>
    dispatch({ type: "INCREASE_QUANTITY", payload: productId }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withProducts(Products, (props) => {
    return {
      variables: {
        categoryName: props.categ,
      },
    };
  })
);
