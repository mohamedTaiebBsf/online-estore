import React from "react";
import { withProducts } from "../../services/http-service";
import { storeConsumer } from "../../store";
import Attributes from "../attributes/attributes";
import AbstractCart from "../cart/abstract-cart/abstractCart";
import Modal from "../UI/modal/modal";
import Product from "./product/product";
import { Container, ModalActions, ModalButton, ModalTitle } from "./styles";

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
    const { clearOptions } = this.props;

    clearOptions();

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
    const { data, currency, options } = this.props;
    const { products } = data.category;
    const { productToAdd, openModal } = this.state;

    return (
      <Container>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            currentCurrency={currency}
            add={() => this.addToCart(product)}
          />
        ))}
        <Modal show={openModal} modalClosed={this.closeModal}>
          <ModalTitle>Choose your favourite options</ModalTitle>
          <Attributes
            select={this.selectOption}
            attributes={productToAdd ? productToAdd.attributes : []}
            selectedOptions={options}
          />
          <ModalActions>
            <ModalButton onClick={this.closeModal}>Decline</ModalButton>
            <ModalButton
              onClick={() => this.addToCart(productToAdd)}
              disabled={
                productToAdd
                  ? productToAdd.attributes.length !== options.length
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
    callback: ({ categ }) => {
      return {
        variables: {
          categoryName: categ,
        },
      };
    },
  })
);
