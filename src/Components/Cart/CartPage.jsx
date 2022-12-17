import React from "react";
import "./cartPage.css";

const CartPage = () => {
  return (
    <div className="body">
      <div className="heading">
        <h1>Summary</h1>
      </div>
      <div className="para1">
        <p>You're saving total on this order!</p>
        <p style={{ color: "#6E42E5" }}>Including with plus</p>
      </div>
    </div>
  );
};

export default CartPage;
