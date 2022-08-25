import * as types from "./actionTypes";

const initialState = {
  lendData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_LEND_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_LEND_DATA_SUCCESS:
      return {
        ...state,
        lendData: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_LEND_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export { reducer };
