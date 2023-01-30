import React from "react";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Body from "../Components/BodyPage/BodyPage";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState(["a", "b", "c", "d"]);
  useEffect(() => {
    if (query === "") {
      setSuggestions([]);
    } else {
      let newListofSuggestions = suggestions
        .filter((item) =>
          item.service.toLowerCase().indexOf(query) !== -1 ? true : false
        )
        .map((item) => item.service);
      setSuggestions(newListofSuggestions);
    }
    setTimeout(() => setLoading(false), 1000);
  }, [query]);
  return (
    <div>
      <Navbar />
      <Body />
      <Box w={"100%"} margin={"auto"} bg="black">
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
