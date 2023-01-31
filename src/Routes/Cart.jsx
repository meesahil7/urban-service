import React, { useEffect } from "react";
import CartPage from "../Components/Cart/CartPage";




const Cart = () => {
  
  useEffect(() => {

  return(()=>{
   
    window.location.reload()
    
  })
}, []);
  return (
    <div>
      <CartPage />
    </div>
  );
};

export default Cart;
