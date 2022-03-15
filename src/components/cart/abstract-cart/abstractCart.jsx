import { Component } from "react";
import * as cartService from "../../../services/cart-service";
import { copy, findById, isEmpty } from "../../../utils";

class AbstractCart extends Component {
  selectOption = (attrId, itemId) => {
    const { options, addOption, updateOption } = this.props;

    const newOption = {
      id: attrId,
      selectItem: itemId,
    };

    if (isEmpty(options)) {
      return addOption(newOption);
    }

    const option = findById(options, attrId);

    if (option) {
      return updateOption(newOption);
    }

    addOption(newOption);
  };

  addToCart = (product, belongTo = "products") => {
    const { cartItems, toast, increaseQty, addToCart, clearOptions, options } =
      this.props;
    const item = copy(product);
    const cart = copy(cartItems);

    if (cartService.has(cart, item)) {
      toast("warning", `${item.name} added again`);
      return increaseQty(item.id);
    }

    const itemToAdd = cartService.customizeItem(item);

    if (isEmpty(item.attributes)) {
      itemToAdd.selectedOptions = [];
      toast("success", `${item.name} added to the Cart!`);
      addToCart(itemToAdd);
      if (belongTo === "product-details") {
        clearOptions();
      }
      return;
    }

    if (belongTo === "products") {
      if (!this.state.openModal) {
        return this.openModal(item);
      }
    }

    if (isEmpty(options)) {
      return;
    }

    itemToAdd.selectedOptions = options;
    addToCart(itemToAdd);

    if (belongTo === "products") {
      this.closeModal();
    }

    if (belongTo === "product-details") {
      clearOptions();
    }

    toast("success", `${item.name} added to the Cart!`);
  };
}

export default AbstractCart;
