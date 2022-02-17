import * as actionsTypes from "../actions/actionTypes";
import { copy } from "../../utils";

const initialState = {
  selectedOptions: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_SELECTED_OPTION:
      return {
        ...state,
        selectedOptions: [...state.selectedOptions, action.payload],
      };
    case actionsTypes.UPDATE_SELECTED_OPTION:
      const options = copy(state.selectedOptions);
      const option = options.find((elt) => elt.id === action.payload.id);
      options[options.indexOf(option)].selectItem = action.payload.selectItem;
      return {
        ...state,
        selectedOptions: options,
      };
    case actionsTypes.CLEAR_SELECTED_OPTIONS:
      return {
        ...state,
        selectedOptions: [],
      };
    default:
      return state;
  }
};

export default reducer;
