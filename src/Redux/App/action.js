import axios from "axios";

const getProductReq = () => {
  return {
    type: "PRODUCT_REQ",
  };
};
const getProductSuccess = (payload) => {
  return { type: "PRODUCT_SUCCESS", payload: payload };
};

const getProductData = (params) => (dispatch) => {
  dispatch(getProductReq());

  axios.get(`http://localhost:8080/${params}`).then((res) => {
    // console.log(res.data)
    // setTempData(res.data)
    dispatch(getProductSuccess(res.data));
  });
};

export { getProductData, getProductSuccess };

// getCartData=()=>(dispatch)=>{

// }
