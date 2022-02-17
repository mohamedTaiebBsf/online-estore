import * as actionTypes from "./actionTypes";

export const setCurrentCategoy = (category) => {
  return {
    type: actionTypes.SET_SELECTED_CATEGORY,
    payload: category,
  };
};
