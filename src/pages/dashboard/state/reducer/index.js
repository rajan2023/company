import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../../../../utils/utility";
const initialState = {
  error: null,
  data: [],
  success: false,
};

const fetch_data = (state, action) => {
  return updateObject(state, { error: null, success: false });
};
const fetch_data_success = (state, action) => {
  console.log(action);
  return updateObject(state, { data: action.response, success: false });
};
const fetch_data_failure = (state, action) => {
  return updateObject(state, { error: action.error, success: false });
};
const add_data_success = (state, action) => {
  console.log(action.response);
  return updateObject(state, { data: [...state.data, action.response] });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return fetch_data(state, action);
    case actionTypes.FETCH_DATA_SUCCESS:
      return fetch_data_success(state, action);
    case actionTypes.FETCH_DATA_FAILURE:
      return fetch_data_failure(state, action);
    case actionTypes.ADD_DATA_SUCCESS:
      return add_data_success(state, action);
    default:
      return state;
  }
};
export default reducer;
