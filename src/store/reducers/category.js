import * as actionsTypes from "../actions/actionTypes";

const initialState = {
  selectedCategory: "all",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
