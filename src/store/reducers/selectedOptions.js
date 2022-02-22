import * as actionsTypes from "../actions/actionTypes";
import * as productService from "../../services/product-service";

const initialState = {
  selectedOptions: [],
};

const updateOption = (state, attribute) => {
  try {
    const options = productService.updateSelectedOption(
      state.selectedOptions,
      attribute
    );

    return {
      ...state,
      selectedOptions: options,
    };
  } catch (error) {
    return state;
  }
};

const addSelectedOption = (state, option) => {
  return {
    ...state,
    selectedOptions: [...state.selectedOptions, option],
  };
};

const clearSelectedOptions = (state) => {
  return {
    ...state,
    selectedOptions: [],
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_SELECTED_OPTION:
      return addSelectedOption(state, action.payload);
    case actionsTypes.UPDATE_SELECTED_OPTION:
      return updateOption(state, action.payload);
    case actionsTypes.CLEAR_SELECTED_OPTIONS:
      return clearSelectedOptions(state);
    default:
      return state;
  }
};

export default reducer;
