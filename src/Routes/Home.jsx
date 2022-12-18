import React from "react";
import LandingPage from "../Components/LandingPage/LandingPage";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TopHeading from "../Components/TopHeading/TopHeading";
import Navbar from "../Components/Navbar/Navbar";
import Login from "../Components/Login/Login";
const Home = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  // useEffect(() => {
  //   if (query === "") {
  //     setSuggestions([]);
  //   } else {
  //     let newListofSuggestions = searchServices
  //       .filter((item) =>
  //         item.service.toLowerCase().indexOf(query) !== -1 ? true : false
  //       )
  //       .map((item) => item.service);
  //     setSuggestions(newListofSuggestions);
  //   }
  //   setTimeout(() => setLoading(false), 1000);
  // }, [query]);
  return (
    <div>
      <Navbar />
      {/* <Login /> */}
      {/* <TopHeading /> */}
      <LandingPage />
    </div>
  );
};

export default Home;
