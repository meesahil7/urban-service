import { SEND_OTP_SUCCESS } from "./actionTypes";

export const sendOtp = (payload) => {
  return {
    type: SEND_OTP_SUCCESS,
    payload,
  };
};
