import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../../../../../utils/utility";
const initialState = {
  data: null,
};
const current_data = (state, action) => {
  return updateObject(state, { data: action.payload });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CURRENT_DATA:
      return current_data(state, action);
    default:
      return state;
  }
};
export default reducer;
