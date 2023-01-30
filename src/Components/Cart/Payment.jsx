import { useCallback, useState, useEffect } from "react";
import useRazorpay from "react-razorpay";
import logo from "./logo.png";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function Payment({ total }) {
  const Razorpay = useRazorpay();
  const navigate = useNavigate();

  const handlePayment = useCallback(() => {
    const order = {
      //   amount: 500,
      currency: "INR",
      receipt: "qwsaq1",
    };

    const options = {
      key: "rzp_test_qho4K1vu3eyRqY",
      amount: total * 100,
      currency: "INR",
      name: "Urban Service",
      description: "Test Transaction",
      image: logo,
      order_id: order.id,
      handler: (res) => {
        swal({
          title: "Payment Successful",
          text: "Your order has been placed!",
          icon: "success",
        });
        navigate("/");
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#0D0D0D",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay, navigate, total]);

  return (
    <div className="App">
      <button
        onClick={() => {
          handlePayment();
        }}
      >
        Proceed to Payment
      </button>
    </div>
  );
}
