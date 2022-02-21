import * as actionTypes from "./actionTypes";

export const addToast = (mode, message = null) => {
  let toast;

  if (!message) toast = { mode: "info", message: mode };
  else toast = { mode, message };

  return {
    type: actionTypes.ADD_TOAST,
    payload: toast,
  };
};

export const removeToast = (toastId) => {
  return {
    type: actionTypes.REMOVE_TOAST,
    payload: toastId,
  };
};
