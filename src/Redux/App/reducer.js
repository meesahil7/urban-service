import React from "react";
import * as types from "./actionTypes";

const initState = {
  ProductData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        ProductData: action.payload,
      };
    case types.PRODUCT_SUCCESS:
      return { ...state, isLoading: true, isError: false };
    default:
      return state;
  }
};

export { reducer };
