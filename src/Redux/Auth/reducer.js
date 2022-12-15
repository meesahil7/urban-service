import { SEND_OTP_SUCCESS } from "./actionTypes";

const initialState = {
  cell: "",
  showOtp: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEND_OTP_SUCCESS:
      return {
        cell: payload,
        showOtp: true,
      };
    default:
      return state;
  }
};

export { reducer };
