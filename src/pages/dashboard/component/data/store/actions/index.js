import * as actionTypes from "./actionTypes";
export const no_of_items = (payload) => {
  return {
    type: actionTypes.NO_OF_ITEMS,
    payload,
  };
};