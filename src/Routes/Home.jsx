import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import { Box } from "@chakra-ui/react";
import  { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Body_1 from "../Components/BodyPage/BodyPage";
const Home = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  
  return <div>
    {/* <Navbar /> */}
    <Body_1 />
     <Box w={"100%"} border='2px solid red' margin={'auto'} bg='black'>

      <Footer />
     </Box>
  </div>;
};

export default Home;
