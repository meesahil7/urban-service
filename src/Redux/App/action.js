import axios from "axios";
import * as types from "./actionTypes";

const getProductReq = () => {
  return {
    type: types.PRODUCT_REQ,
  };
};
const getProductSuccess = (payload) => {
  return { type: types.PRODUCT_SUCCESS, payload: payload };
};

const getProductData = (params) => (dispatch) => {
  dispatch(getProductReq());

  axios.get(`https://urban-server-new.onrender.com/${params}`).then((res) => {
    // setTempData(res.data)
    dispatch(getProductSuccess(res.data));
  });
};

export { getProductData, getProductSuccess };
