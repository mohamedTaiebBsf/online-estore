import * as actionTypes from "./actionTypes";

export const addToCart = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const removeProductFromCart = (productId) => {
  return {
    type: actionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: productId,
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};

export const increaseQuantity = (productId) => {
  return {
    type: actionTypes.INCREASE_QUANTITY,
    payload: productId,
  };
};

export const decreaseQuantity = (productId) => {
  return {
    type: actionTypes.DECREASE_QUANTITY,
    payload: productId,
  };
};

export const toggleMiniCart = () => {
  return {
    type: actionTypes.TOGGLE_MINI_CART,
  };
};

export const closeMiniCart = () => {
  return {
    type: actionTypes.CLOSE_MINI_CART,
  };
};
