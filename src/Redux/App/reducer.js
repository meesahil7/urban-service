import React from "react";






const initState={
  ProductData:[]
  ,
  isLoading:false,
  isError:false
}



const reducer = (state=initState,action) => {
  switch(action.type){
    case "PRODUCT_SUCCESS":
      return {...state,isLoading:false,isError:false,ProductData:action.payload}
    case "PRODUCT_REQ":
      return {...state,isLoading:true,isError:false}
    default : 
    return state

  }
};



export { reducer };

