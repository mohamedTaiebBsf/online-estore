import React from "react";
import Product from "./product/product";
import Attributes from "../attributes/attributes";
import Modal from "../UI/modal/modal";
import AbstractCart from "../cart/abstract-cart/abstractCart";
import { withProducts } from "../../services/http-service";
import { storeConsumer } from "../../store";
import { Container, ModalTitle, ModalActions, ModalButton } from "./styles";

class Products extends AbstractCart {
  state = {
    openModal: false,
    productToAdd: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { categ, currency, options } = this.props;
    const { name } = this.props.data.category;
    const { openModal } = this.state;

    if (
      categ !== nextProps.categ ||
      currency !== nextProps.currency ||
      name !== nextProps.data.category.name ||
      options !== nextProps.options ||
      openModal !== nextState.openModal
    )
      return true;

    return false;
  }

  closeModal = () => {
    this.props.clearOptions();
    this.setState({
      openModal: false,
      productToAdd: null,
    });
  };

  openModal = (product) => {
    this.setState({
      openModal: true,
      productToAdd: product,
    });
  };

  render() {
    const { products } = this.props.data.category;
    const { productToAdd } = this.state;

    return (
      <Container>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            currentCurrency={this.props.currency}
            add={() => this.addToCart(product)}
          />
        ))}
        <Modal show={this.state.openModal} modalClosed={this.closeModal}>
          <ModalTitle>Choose your favourite options</ModalTitle>
          <Attributes
            select={this.selectOption}
            attributes={productToAdd ? productToAdd.attributes : []}
            selectedOptions={this.props.options}
          />
          <ModalActions>
            <ModalButton onClick={this.closeModal}>Decline</ModalButton>
            <ModalButton
              onClick={() => this.addToCart(this.state.productToAdd)}
              disabled={
                productToAdd
                  ? productToAdd.attributes.length !== this.props.options.length
                  : true
              }
            >
              Accept
            </ModalButton>
          </ModalActions>
        </Modal>
      </Container>
    );
  }
}

export default storeConsumer(
  withProducts(Products, {
    name: "products",
    callback: (props) => {
      return {
        variables: {
          categoryName: props.categ,
        },
      };
    },
  })
);
