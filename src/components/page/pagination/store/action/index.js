import * as actionTypes from "./actionTypes";
export const current_data = (payload) => {
  return {
    type: actionTypes.CURRENT_DATA,
    payload,
  };
};
