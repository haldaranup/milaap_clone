import axios from "axios";
import * as types from "./actionTypes";

export const getlendDataRequest = () => {
  return {
    type: types.GET_LEND_DATA_REQUEST,
  };
};
export const getlendDataSuccess = (payload) => {
  return {
    type: types.GET_LEND_DATA_SUCCESS,
    payload,
  };
};

export const getLendData = () => (dispatch) => {
  dispatch(getlendDataRequest());
  axios
    .get("https://haldaranup.herokuapp.com/content")
    .then((r) => {
      dispatch(getlendDataSuccess(r.data));
    })
    .catch((e) => dispatch(getlendDataFailure(e)));
};

export const getlendDataFailure = () => {
  return {
    type: types.GET_LEND_DATA_FAILURE,
  };
};
