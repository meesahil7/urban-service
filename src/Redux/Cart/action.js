import axios from "axios";
import { ADD_CART_DATA } from "./actionTypes";

const getCartSuccess = (payload) => {
  return {
    type: "GET_CART_DATA",
    payload: payload,
  };
};

const addCartData = (payload) => {
  return {
    type: ADD_CART_DATA,
    payload: payload,
  };
};

const postCartData = (payload) => (dispatch) => {
  axios
    .post("https://urban-server-new.onrender.com/cart_data", payload)
    .then((res) => {
      dispatch(getCartData());

    });
};

const deleteCartData=(payload)=>(dispatch)=>{
  axios.delete(`https://urban-server-new.onrender.com/cart_data/${payload}`).then((res)=>{
    dispatch(getCartData())
  })
}
const updateCartData=(id,payload)=>(dispatch)=>{
  axios.patch(`https://urban-server-new.onrender.com/cart_data/${id}`,payload).then((res)=>{
    dispatch(getCartData())
  })
}

const getCartData = (params) => (dispatch) => {
  // dispatch(getProductReq())

  return axios
    .get(`https://urban-server-new.onrender.com/${"cart_data"}`)
    .then((res) => {
      // setTempData(res.data)
      dispatch(getCartSuccess(res.data));
    });
};





export { getCartData, addCartData, postCartData,deleteCartData,updateCartData };
