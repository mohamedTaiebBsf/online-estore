import * as actionsTypes from "../actions/actionTypes";

const initialState = {
  currentCurrency: "$",
  showCurrencies: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.SWITCH_CURRENCY:
      return {
        ...state,
        showCurrencies: !state.showCurrencies,
        currentCurrency: action.payload,
      };
    case actionsTypes.TOGGLE_CURRENCY:
      return {
        ...state,
        showCurrencies: !state.showCurrencies,
      };
    case actionsTypes.CLOSE_CURRENCY:
      return {
        ...state,
        showCurrencies: false,
      };
    default:
      return state;
  }
};

export default reducer;
