import * as actionsTypes from "../actions/actionTypes";
import { uuid } from "../../utils";

const initialState = {
  toasts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_TOAST:
      return {
        toasts: [...state.toasts, { ...action.payload, id: uuid() }],
      };
    case actionsTypes.REMOVE_TOAST:
      return {
        toasts: state.toasts.filter((t) => t.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
