import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useSelector } from "react-redux";
import "./login.css";
import NumberInput from "./NumberInput";
import Pin from "./Pin";

const Login = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const showOtp = useSelector((store) => store.AuthReducer.showOtp);
  console.log(showOtp);

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
        <h3 id="title">Please login to continue</h3>
        {showOtp ? <Pin length={6} perInputBox={1} /> : <NumberInput />}
      </Drawer>
    </>
  );
};

export default Login;
