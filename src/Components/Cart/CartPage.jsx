import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./cartPage.css";
import Payment from "./Payment";

const CartPage = () => {
  const cart = useSelector((store) => store.CartReducer.cart);
  const [totalDiscount, setTotalDiscount] = useState(899);
  const [totalCartValue, setTotalCartValue] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [memberDiscount, setMemberDiscount] = useState({
    value: 150,
    bool: true,
  });

  const CountCartValue = () => {
    let Sum = 0;
    cart.forEach((el) => {
      Sum += +el.price;
    });
    setTotalCartValue(Sum);
  };
  useEffect(() => {
    CountCartValue();
  }, [cart]);

  const removeClick = () => {
    setMemberDiscount(memberDiscount.bool === false);
    setTotalDiscount(50);
    setTotalCartValue(totalCartValue - 149);
  };

  const handleIncrease = (value) => {
    setQuantity(quantity + 1);
    setTotalCartValue(totalCartValue + Number(value));
  };

  const handleDecrease = (value) => {
    setQuantity(quantity - 1);
    setTotalCartValue(totalCartValue - Number(value));
  };

  return (
    <div className="body">
      <div className="heading">
        <h1>Summary</h1>
      </div>
      <div className="container">
        <div>
          <div className="para1">
            <p>You're saving total ₹{totalDiscount} on this order!</p>
            {memberDiscount.bool && (
              <p style={{ color: "#6E42E5" }}>
                Including ₹{memberDiscount.value} with plus
              </p>
            )}
          </div>
          <div style={{ marginTop: "34px" }}>
            {cart &&
              cart?.map((item) => {
                return (
                  <div key={item.id} style={{ marginBottom: "30px" }}>
                    <div className="title1">
                      <div>
                        <p>{item.title}</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "20px",
                        }}
                      >
                        <div className="price1">
                          <button
                            disabled={quantity === 1}
                            onClick={() => handleDecrease(item.price)}
                            style={{ marginRight: "15px" }}
                          >
                            -
                          </button>
                          <p>{quantity}</p>
                          <button
                            onClick={() => handleIncrease(item.price)}
                            style={{ marginLeft: "15px" }}
                          >
                            +
                          </button>
                        </div>
                        <div>
                          <p>₹{item.price}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      {item &&
                        item.para.map((data, index) => {
                          return (
                            <ul key={index} className="ul">
                              <li>{data.para}</li>
                            </ul>
                          );
                        })}
                    </div>
                    <button className="edit-btn">Edit Package</button>
                  </div>
                );
              })}
          </div>
          {memberDiscount.bool && (
            <div className="last">
              <div>
                <h2>Plus Membership</h2>
                <p
                  style={{ fontSize: "14px", color: "grey", marginTop: "5px" }}
                >
                  12 months
                </p>
              </div>
              <div className="price2">
                <div>
                  <button onClick={removeClick} className="rmv-btn">
                    Remove
                  </button>
                </div>
                <div>
                  <p>₹299</p>
                  <p style={{ textDecoration: "line-through" }}>₹999</p>
                </div>
              </div>
            </div>
          )}
          <div className="border"></div>
        </div>
        <div className="right-container">
          <div className="title2">
            <h1>Payment Summary</h1>
          </div>
          <div>
            <div className="same">
              <p>Item total</p>
              <p>₹{totalCartValue}</p>
            </div>
            <div className="same">
              <p>Item discount</p>
              <p style={{ color: "teal" }}>-₹50</p>
            </div>
            {memberDiscount.bool && (
              <div className="same">
                <p>Membership discount</p>
                <p style={{ color: "teal" }}>-₹{memberDiscount.value}</p>
              </div>
            )}
            <div className="same">
              <p id="tax">Taxes and Fee</p>
              <p>₹59</p>
            </div>
            {memberDiscount.bool && (
              <div className="same">
                <p>Plus Membership</p>
                <p
                  style={{
                    textDecoration: "line-through",
                    marginLeft: "220px",
                  }}
                >
                  ₹999
                </p>
                <p>₹299</p>
              </div>
            )}
          </div>
          <div className="total-bill">
            <div
              className="same"
              style={{ fontWeight: "bold", marginBottom: "15px" }}
            >
              <h2>Total</h2>
              <p>₹{totalCartValue + 158}</p>
            </div>
            <div className="yay">
              Yay! You saved ₹{totalDiscount} on final bill
            </div>
          </div>
          <div>
            <div className="pay-btn">
              <Payment total={totalCartValue + 158} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
