import * as actionTypes from "./actionTypes";
export const fetch_data = () => {
  return {
    type: actionTypes.FETCH_DATA,
  };
};
export const fetch_data_success = (response) => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    response,
  };
};

export const fetch_data_failure = (error) => {
  return {
    type: actionTypes.FETCH_DATA_FAILURE,
    error,
  };
};

export const add_data = () => {
  return {
    type: actionTypes.ADD_DATA,
  };
};

export const add_data_success = (response) => {
  return {
    type: actionTypes.ADD_DATA_SUCCESS,
    response,
  };
};

export const add_data_failure = (error) => {
  return {
    type: actionTypes.ADD_DATA_FAILURE,
    error,
  };
};
