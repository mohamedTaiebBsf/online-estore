import * as actionsTypes from "../actions/actionTypes";
import * as cartService from "../../services/cart-service";

const initialState = {
  showMiniCart: false,
  cartProducts: [],
};

const increaseQty = (state, productId) => {
  try {
    const cartItems = cartService.increaseItemQuantity(
      state.cartProducts,
      productId
    );

    return {
      ...state,
      cartProducts: cartItems,
    };
  } catch (error) {
    return state;
  }
};

const decreaseQty = (state, productId) => {
  try {
    const cartItems = cartService.decreaseItemQuantity(
      state.cartProducts,
      productId
    );

    if (cartItems === null) return state;

    return {
      ...state,
      cartProducts: cartItems,
    };
  } catch (error) {
    return state;
  }
};

const removeProduct = (state, productId) => {
  try {
    const cartItems = cartService.removeItemFromProduct(
      state.cartProducts,
      productId
    );

    return {
      ...state,
      cartProducts: cartItems,
    };
  } catch (error) {
    return state;
  }
};

const toggleMiniCart = (state) => {
  return {
    ...state,
    showMiniCart: !state.showMiniCart,
  };
};

const closeMiniCart = (state) => {
  return {
    ...state,
    showMiniCart: false,
  };
};

const clearCart = (state) => {
  return {
    ...state,
    cartProducts: [],
  };
};

const addToCart = (state, item) => {
  return {
    ...state,
    cartProducts: [...state.cartProducts, item],
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.TOGGLE_MINI_CART:
      return toggleMiniCart(state);
    case actionsTypes.CLOSE_MINI_CART:
      return closeMiniCart(state);
    case actionsTypes.ADD_TO_CART:
      return addToCart(state, action.payload);
    case actionsTypes.CLEAR_CART:
      return clearCart(state);
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
