import React, { Component } from "react";
import Modal from "../../UI/modal/modal";
import Attributes from "../../attributes/attributes";
import { storeConsumer } from "../../../store";
import { copy, displayPrice, omit, isEmpty } from "../../../utils";
import {
  Container,
  Wrapper,
  ImageContainer,
  Image,
  Title,
  Price,
  CartContainer,
  CartIcon,
  Notif,
  Anchor,
  ModalTitle,
  ModalActions,
  ModalButton,
} from "./styles";

class Product extends Component {
  state = {
    openModal: false,
  };

  closeModal = () => {
    this.props.clearOptions();
    this.setState({ openModal: false });
  };

  openModal = () => {
    this.setState({ openModal: true });
  };

  selectOption = (attrId, itemId) => {
    console.log(attrId, itemId);
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
    console.log("*** Add To Cart Button Clicked! ***");
    const omittedAttrs = ["inStock", "description", "category", "gallery"];
    const item = copy(product);
    const cart = copy(this.props.cartItems);

    // If Product is already in Cart
    // Then, we should update
    const isInCart = cart.reduce(
      (prev, curr) => curr.id === product.id || prev,
      false
    );

    if (isInCart) {
      return this.props.update(item.id);
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
      return this.props.add(itemToAdd);
    }

    if (!this.state.openModal) {
      return this.openModal();
    }

    if (isEmpty(this.props.options)) {
      return;
    }

    itemToAdd.selectedOptions = this.props.options;
    this.props.add(itemToAdd);
    this.closeModal();
  };

  render() {
    const { gallery, brand, name, inStock, id, prices, attributes } =
      this.props.product;

    return (
      <React.Fragment>
        <Container $inStock={inStock}>
          <Wrapper>
            <Anchor to={`/product/${id}`}>
              <ImageContainer>
                <Image
                  src={
                    gallery.length > 0
                      ? gallery[0]
                      : "/assets/images/no-images.png"
                  }
                  alt={name}
                />
                {!inStock && <Notif>Out Of Stock</Notif>}
              </ImageContainer>
            </Anchor>
            {inStock && (
              <CartContainer onClick={() => this.addToCart(this.props.product)}>
                <CartIcon src="/assets/images/cart-icon.svg" />
              </CartContainer>
            )}
          </Wrapper>
          <Anchor to={`/product/${id}`}>
            <Title>
              {brand} - {name}
            </Title>
          </Anchor>
          <Price>{displayPrice(prices, this.props.currentCurrency)}</Price>
        </Container>
        <Modal show={this.state.openModal} modalClosed={this.closeModal}>
          <ModalTitle>Choose your favourite options</ModalTitle>
          <Attributes
            select={this.selectOption}
            attributes={attributes}
            selectedOptions={this.props.options}
          />
          <ModalActions>
            <ModalButton onClick={this.closeModal}>Decline</ModalButton>
            <ModalButton
              onClick={() => this.addToCart(this.props.product)}
              disabled={attributes.length !== this.props.options.length}
            >
              Accept
            </ModalButton>
          </ModalActions>
        </Modal>
      </React.Fragment>
    );
  }
}

export default storeConsumer(Product);
