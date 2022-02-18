import React, { Component } from "react";
import Product from "./product/product";
import Attributes from "../attributes/attributes";
import Modal from "../UI/modal/modal";
import { withProducts } from "../../services/http-service";
import { storeConsumer } from "../../store";
import { Container, ModalTitle, ModalActions, ModalButton } from "./styles";
import { copy, omit, isEmpty } from "../../utils";

class Products extends Component {
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

  selectOption = (attrId, itemId) => {
    const option = {
      id: attrId,
      selectItem: itemId,
    };

    if (isEmpty(this.props.options)) {
      return this.props.addOption(option);
    }

    const attr = this.props.options.find((elt) => elt.id === attrId);

    if (attr) {
      return this.props.updateOption(option);
    }

    this.props.addOption(option);
  };

  addToCart = (product) => {
    const omittedAttrs = ["inStock", "description", "category", "gallery"];
    const item = copy(product);
    const cart = copy(this.props.cartItems);

    // If Product is already in Cart
    // Then, we should update product qty
    const isInCart = cart.reduce(
      (prev, curr) => curr.id === product.id || prev,
      false
    );

    if (isInCart) {
      return this.props.increaseQty(item.id);
    }

    const itemToAdd = omit(
      {
        ...item,
        image: product.gallery[0],
        quantity: 1,
      },
      omittedAttrs
    );

    if (isEmpty(product.attributes)) {
      return this.props.addToCart(itemToAdd);
    }

    if (!this.state.openModal) {
      return this.openModal(item);
    }

    if (isEmpty(this.props.options)) {
      return;
    }

    itemToAdd.selectedOptions = this.props.options;
    this.props.addToCart(itemToAdd);
    this.closeModal();
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
  withProducts(Products, (props) => {
    return {
      variables: {
        categoryName: props.categ,
      },
    };
  })
);
