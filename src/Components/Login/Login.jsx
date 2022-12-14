import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./login.css";
import firebase from "./firebase";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";

const Login = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [num, setNum] = useState("");
  const configCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          handleClick();
          console.log("verified");
        },
        defaultCountry: "IN",
      }
    );
  };

  const handleClick = () => {
    if (num.length === 12) {
      const phoneNumber = num;
      configCaptcha();
      const appVerifier = window.recaptchaVerifier;
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP Send");
          // setShowOtp(true);
          // setLoading(false);
          // ...
        })
        .catch((error) => {
          // Error; SMS not sent
          console.log("OTP not Send", error);

          // ...
        });
    }
  };

  return (
    <>
      <button onClick={toggleDrawer}>Show</button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
        size={"360px"}
      >
        <h3>Please login to continue</h3>
        <PhoneInput
          country={"in"}
          onlyCountries={["in", "us", "sg", "sa", "ae"]}
          className="input"
          inputStyle={{
            width: "270px",
            height: "50px",
            marginLeft: "40px",
            fontSize: "18px",
            autoFocus: true,
          }}
          buttonStyle={{
            padding: " 0px 20px",
            marginLeft: "20px",
            height: "50px",
          }}
          dropdownStyle={{ textAlign: "left", width: "240px" }}
          countryCodeEditable={false}
          placeholder="Your phone number"
          value={num}
          onChange={(e) => setNum(e)}
        />
        <button className="continue" onClick={handleClick}>
          Continue
        </button>
      </Drawer>
    </>
  );
};

export default Login;
