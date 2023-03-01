import * as actionTypes from "./actionTypes";
export const search_item = (payload) => {
  return {
    type: actionTypes.SEARCH_ITEM,
    payload,
  };
};
