import { Avatar, Box, Flex , Text } from "@chakra-ui/react";
import { useState } from "react";
import "../Components/LandingPage/Style.css";
import plusImage from "../Components/LandingPage/images/plus_in_number.png";
const Order = ()=>{
    const [savings , setSaving] = useState(100);
    const [plan12 , setPlan12] = useState(false);
    const [plan6 , setPlan6] = useState(false);
    
    return (
        <div>
            <Box id="order_topSection">
            <Avatar src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_144,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/customer-subscription/1629973811293-86fc85.png"/>
            <h1 style={{fontSize:"40px"}}>Save 15% on every order for just ₹99 extra</h1>
            <Flex>
                <Box style={{display:"flex" , justifyContent:"center" , alignItems:"center" , width : "2%" }}>
                <Avatar src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_profile,q_auto:low,f_auto/w_48,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/customer-subscription/1626076109261-2d8e7b.png" width={'100%'}/>
                </Box>
                <Text style={{color:"rgb(7, 121, 76)"}}>You will save ₹150 on this order</Text>
            </Flex>
            </Box>

            <Flex style={{width:"80%" , margin:"auto" , textAlign:"left"}} gap="40px">
                <Box style={{width:"60%"}}>
                    <h3 style={{fontWeight:"600" , lineHeight:"28px", fontSize:"22px"}}>Other benefits</h3>
                    <Flex gap={"15px"}>
                        <Box style={{width : "8%" , display:"flex" , alignItems:"center"}}>
                        <Avatar src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_48,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/customer-subscription/1634028128628-b047e3.png" width={"100%"}/>
                        </Box>
                        <Box>
                            <Text style={{fontSize:"16px" , fontWeight:"600",color:"rgb(15, 15, 15)" , lineHeight:"20px"}}>100% moneyback guarantee</Text>
                            <Text style={{ fontSize:"14px" , fontWeight:"400" , color:"rgb(84, 84, 84)"}}>If you save less than your membership price we refund you the difference</Text>
                        </Box>
                    </Flex>
                    <Flex gap={"15px"}>
                        <Box style={{width : "8%" , display:"flex" , alignItems:"center"}}>
                        <Avatar src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_48,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/customer-subscription/1640364768771-a82407.png" width={"100%"}/>
                        </Box>
                        <Box>
                            <Text style={{fontSize:"16px" , fontWeight:"600",color:"rgb(15, 15, 15)" , lineHeight:"20px"}}>Top rated professionals</Text>
                            <Text style={{ fontSize:"14px" , fontWeight:"400" , color:"rgb(84, 84, 84)"}}>Get exclusively trained UC plus professionals at your service</Text>
                        </Box>
                    </Flex>
                    <div style={{backgroundColor:"rgb(237, 237, 237)",height:"4px"}}></div>
                    <Flex>
                        <Box>
                            <h4 style={{fontWeight:"600"}}>Estimated savings</h4>
                            <h1 style={{color:"rgb(7, 121, 76)",fontSize:"50px" , fontWeight:"700" , lineHeight:"16px"}}>₹{savings}</h1>
                            <Text>No. of services / year</Text>
                            <Box id="buttons">
                                <button onClick={()=> setSaving(288)}>2</button>
                                <button onClick={()=> setSaving(576)}>4</button>
                                <button onClick={()=> setSaving(864)}>6</button>
                                <button onClick={()=> setSaving(1152)}>8</button>
                                <button onClick={()=> setSaving(1440)}>10</button>
                                <button onClick={()=> setSaving(1728)}>12</button>
                            </Box>
                            <Flex gap={'20px'} >
                                <Box style={{width:"5%" , display:"flex" , alignItems:"center"}}>
                                    <Avatar src="https://img.icons8.com/ios-filled/512/briefcase.png" width={'100%'}/>
                                </Box>
                                <Text>Subscribers placed 6 orders on average in your area</Text>
                            </Flex>
                        </Box>
                        <Box style={{width:'12%', display : "flex" , alignItems:"center"}}>
                            <Avatar src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_profile,q_auto:low,f_auto/w_48,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/customer-subscription/1626076109261-2d8e7b.png" width={'100%'}/>
                        </Box>
                    </Flex>
                    <div style={{backgroundColor:"rgb(237, 237, 237)",height:"4px"}}></div>
                    
                    <Box>
                        <Text style={{lineHeight:"28px",fontWeight:"600" , color:"rgb(15, 15, 15)",fontSize:"20px"}}>Plus in numbers</Text>
                        <Avatar src={plusImage}/>
                    </Box>
                </Box>
                <Box style={{width:'40%'}}>
                    <h3>Select your plan</h3>
                    <Box style={{width:"100%", borderRadius:"15px" , boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
                        <Flex justifyContent={'space-between'} padding="0px 20px">
                            <Box>
                                <Text style={{color:"rgb(7, 121, 76)"}}>Bought 6 lakh+ times</Text>
                                <h2>12 months</h2>
                                <Text>₹299 <span style={{textDecoration:"line-through"}}>₹999</span></Text>
                            </Box>
                            <Box style={{display : "flex" , alignItems:"center"}}>
                                <button className="planButton" onClick={()=>setPlan12((prev)=> !prev)}>{plan12 ? "Remove" : "Add"}</button>
                            </Box>
                        </Flex>
                    </Box>
                    <br /><br />
                    <Box style={{width:"100%", borderRadius:"15px" , boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
                        <Flex justifyContent={'space-between'} padding="0px 20px">
                            <Box>                                
                                <h2>6 months</h2>
                                <Text>₹249 <span style={{textDecoration:"line-through"}}>₹699</span></Text>
                            </Box>
                            <Box style={{display : "flex" , alignItems:"center"}}>
                                <button className="planButton" onClick={()=>setPlan6((prev)=> !prev)}>{plan6 ? "Remove" : "Add"}</button>
                            </Box>
                        </Flex>
                    </Box>
                    <div style={{backgroundColor:"rgb(237, 237, 237)",height:"4px"}}></div>
                </Box>                
            </Flex>           
        </div>
    );
}

export default Order;