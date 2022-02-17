import * as actionTypes from "./actionTypes";

export const addSelectedOption = (option) => {
  return {
    type: actionTypes.ADD_SELECTED_OPTION,
    payload: option,
  };
};

export const updateSelectedOption = (option) => {
  return {
    type: actionTypes.UPDATE_SELECTED_OPTION,
    payload: option,
  };
};

export const clearSelectedOptions = () => {
  return {
    type: actionTypes.CLEAR_SELECTED_OPTIONS,
  };
};
