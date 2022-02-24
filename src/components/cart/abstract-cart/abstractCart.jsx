import { Component } from "react";
import * as cartService from "../../../services/cart-service";
import { copy, findById, isEmpty } from "../../../utils";

class AbstractCart extends Component {
  selectOption = (attrId, itemId) => {
    const newOption = {
      id: attrId,
      selectItem: itemId,
    };

    if (isEmpty(this.props.options)) {
      return this.props.addOption(newOption);
    }

    const option = findById(this.props.options, attrId);

    if (option) {
      return this.props.updateOption(newOption);
    }

    this.props.addOption(newOption);
  };

  addToCart = (product, belongTo = "products") => {
    const item = copy(product);
    const cart = copy(this.props.cartItems);

    if (cartService.has(cart, item)) {
      this.props.toast("warning", `${item.name} added again`);
      return this.props.increaseQty(item.id);
    }

    const itemToAdd = cartService.customizeItem(item);

    if (isEmpty(item.attributes)) {
      itemToAdd.selectedOptions = [];
      this.props.toast("success", `${item.name} added to the Cart!`);
      this.props.addToCart(itemToAdd);
      if (belongTo === "product-details") {
        this.props.clearOptions();
      }
      return;
    }

    if (belongTo === "products") {
      if (!this.state.openModal) {
        return this.openModal(item);
      }
    }

    if (isEmpty(this.props.options)) {
      return;
    }

    itemToAdd.selectedOptions = this.props.options;
    this.props.addToCart(itemToAdd);
    if (belongTo === "products") {
      this.closeModal();
    }
    if (belongTo === "product-details") {
      this.props.clearOptions();
    }
    this.props.toast("success", `${item.name} added to the Cart!`);
  };
}

export default AbstractCart;
