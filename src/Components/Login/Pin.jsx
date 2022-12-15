import { useState } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
import PinInput from "./PinInput";
import { useSelector } from "react-redux";
import "./login.css";

const Pin = ({ length, perInputBox = 1, setPin }) => {
  const [inputBoxLength] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);
  const [inputBoxValue] = useState(new Array(length).fill(""));
  const cell = useSelector((store) => store.AuthReducer.cell);
  // console.log(cell);

  const handleChange = (e, index) => {
    inputBoxValue[index] = e.target.value;
    console.log(inputBoxValue);
    if (e.target.value.length > 0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    // setPin(inputBoxValue.join(""));
  };

  const handleBackSpace = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    inputBoxValue[index] = e.target.value;
    // setPin(inputBoxValue.join(""));
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => index < length);
    data.forEach((item, index) => {
      inputBoxValue[index] = item;
      inputRef.current[index].value = item;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
  };

  return (
    <div>
      <div>
        <h3 id="enter">Enter verification code</h3>
        <div className="para">
          <p>We have a sent you a 6 digit OTP on {cell} </p>
          <button id="edit-btn">Edit</button>
        </div>
      </div>
      <div onPaste={handlePaste}>
        {inputBoxLength.map((_, index) => {
          return (
            <PinInput
              ref={(inputEl) => {
                inputRef.current[index] = inputEl;
              }}
              disabledBool={index >= 1}
              key={index}
              correctPassword={true}
              handleChange={(e) => handleChange(e, index)}
              handleBackSpace={(e) => handleBackSpace(e, index)}
              perInputBox={perInputBox}
            />
          );
        })}
      </div>
      <div>
        <button id="otp-btn">Resend OTP</button>
        <br />
        <button className="continue">Login</button>
      </div>
    </div>
  );
};

export default Pin;

Pin.propTypes = {
  length: PropTypes.number.isRequired,
  maxLength: PropTypes.number,
};
