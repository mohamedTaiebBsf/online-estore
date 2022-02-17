import * as actionsTypes from "../actions/actionTypes";
import { copy } from "../../utils";

const initialState = {
  showMiniCart: false,
  cartProducts: [],
};

const increaseQty = (state, productId) => {
  const cart = copy(state.cartProducts);
  const item = cart.find((elt) => elt.id === productId);
  cart[cart.indexOf(item)].quantity++;
  return {
    ...state,
    cartProducts: cart,
  };
};

const decreaseQty = (state, productId) => {
  const cart = copy(state.cartProducts);
  const item = cart.find((elt) => elt.id === productId);
  if (cart[cart.indexOf(item)].quantity === 1) return state;
  cart[cart.indexOf(item)].quantity--;
  return {
    ...state,
    cartProducts: cart,
  };
};

const removeProduct = (state, productId) => {
  let cart = copy(state.cartProducts);
  const item = cart.find((elt) => elt.id === productId);
  if (item) {
    cart = cart.filter((product) => product.id !== productId);

    return {
      ...state,
      cartProducts: cart,
    };
  }

  return state;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.TOGGLE_MINI_CART:
      return {
        ...state,
        showMiniCart: !state.showMiniCart,
      };
    case actionsTypes.CLOSE_MINI_CART:
      return {
        ...state,
        showMiniCart: false,
      };
    case actionsTypes.ADD_TO_CART:
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };
    case actionsTypes.CLEAR_CART:
      return {
        ...state,
        cartProducts: [],
      };
    case actionsTypes.REMOVE_PRODUCT_FROM_CART:
      return removeProduct(state, action.payload);
    case actionsTypes.INCREASE_QUANTITY:
      return increaseQty(state, action.payload);
    case actionsTypes.DECREASE_QUANTITY:
      return decreaseQty(state, action.payload);

    default:
      return state;
  }
};

export default reducer;
