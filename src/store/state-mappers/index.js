import * as actionCreators from "../actions";

export const mapStateToProps = (state) => ({
  currency: state.curr.currentCurrency,
  showCurrency: state.curr.showCurrencies,
  cartItems: state.cart.cartProducts,
  showMiniCart: state.cart.showMiniCart,
  categ: state.categ.selectedCategory,
  options: state.options.selectedOptions,
});

export const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(actionCreators.addToCart(product)),
  removeFromCart: (productId) =>
    dispatch(actionCreators.removeProductFromCart(productId)),
  clearCart: () => dispatch(actionCreators.clearCart()),
  increaseQty: (productId) =>
    dispatch(actionCreators.increaseQuantity(productId)),
  decreaseQty: (productId) =>
    dispatch(actionCreators.decreaseQuantity(productId)),
  toggleMiniCart: () => dispatch(actionCreators.toggleMiniCart()),
  closeMiniCart: () => dispatch(actionCreators.closeMiniCart()),
  addOption: (option) => dispatch(actionCreators.addSelectedOption(option)),
  updateOption: (option) =>
    dispatch(actionCreators.updateSelectedOption(option)),
  clearOptions: () => dispatch(actionCreators.clearSelectedOptions()),
  switchCurr: (symbol) => dispatch(actionCreators.switchCurrency(symbol)),
  toggleCurr: () => dispatch(actionCreators.toggleCurrency()),
  closeCurr: () => dispatch(actionCreators.closeCurrency()),
  setCateg: (category) => dispatch(actionCreators.setCurrentCategoy(category)),
});
