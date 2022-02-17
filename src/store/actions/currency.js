import * as actionTypes from "./actionTypes";

export const toggleCurrency = () => {
  return {
    type: actionTypes.TOGGLE_CURRENCY,
  };
};

export const closeCurrency = () => {
  return {
    type: actionTypes.CLOSE_CURRENCY,
  };
};

export const switchCurrency = (symbol) => {
  return {
    type: actionTypes.SWITCH_CURRENCY,
    payload: symbol,
  };
};
