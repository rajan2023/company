import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../../../../../utils/utility";
const initialState = {
  data: 10,
};

const no_of_items = (state, action) => {
  return updateObject(state, { data: action.payload });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NO_OF_ITEMS:
      return no_of_items(state, action);
    default:
      return state;
  }
};
export default reducer;
