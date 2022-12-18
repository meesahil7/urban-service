import { Box, Button, Divider, Flex, Heading, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryItems } from "../Components/CategoryItems";
import { PopUpForUSsafe } from "../Components/PopUpForUSSafe";
import { ScrollingExample } from "../Components/PopUpModel";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { addCartData } from "../Redux/Cart/action";
import { useEffect } from "react";
import axios from "axios";
import { getCartRequest } from "../Redux/App/action";

// const youtubeLink = "UwI71cKFR6g"

const Product = () => {
  const [tempData, setTempData] = useState({});

  const { id } = useParams();

  // console.log(id)

  const dispatch = useDispatch();
  const cart = useSelector((store) => store.CartReducer.cart);
  console.log(cart);
  const [totalCartValue, setTotalCartValue] = useState(0);

  const CountCartValue = () => {
    let Sum = 0;
    cart.forEach((el) => {
      Sum += +el.price;
    });

    setTotalCartValue(Sum);
  };

  // console.log(totalCartValue)

  useEffect(() => {
    axios.get(`http://localhost:8080/${id}`).then((res) => {
      // console.log(res.data)
      setTempData(res.data);
    });
    CountCartValue();
  }, [cart]);
  // console.log(tempData)

  // console.log(tempData.head)

  return (
    <Box p="10" margin={"auto"} width={"85%"}>
      {/* Video Div */}
      <Box
        flexDir={["column", "row"]}
        my={"10"}
        py={"10"}
        style={{
          width: "100%",
          // border: "1px solid red",
          display: "flex",
          justifyContent: "space-evenly",
          // flexWrap: "wrap"
        }}
      >
        <Box margin={"auto"} w={"full"} textAlign={"left"}>
          <PopUpForUSsafe />
          <Heading>{tempData.head}</Heading>
        </Box>

        {/* Front Video */}
        <Box margin="auto" w={"full"}>
          <Box width={"fit-content"} m="auto">
            <iframe
              loop="0"
              style={{ borderRadius: "10px" }}
              title="naruto"
              width={"595px"}
              height="335px"
              controls="0"
              modestbranding="1"
              src={`https://www.youtube.com/embed/${tempData?.video}?playlist=${tempData?.video}&autoplay=1&mute=1&controls=0&modestbranding=1&autoplay=1&loop=1`}
            />
          </Box>
        </Box>
      </Box>

      {/* Navbar */}
      <Box my={"10"} w={"100%"} bg="gray.200" h={"4px"}></Box>
      <Box position={"sticky"} top="0" zIndex="1">
        <Flex
          p="4"
          margin={"auto"}
          display={"flex"}
          justifyContent="space-evenly"
          // wrap={"wrap"}

          bg={"white"}

          // borderBottom={"0.1px solid gray"}
        >
          {tempData?.categories?.map((el, i) => (
            <CategoryItems key={i} {...el} />
          ))}
        </Flex>

        <Divider borderColor="gray.400" />
      </Box>

      {/* Listing All Products */}
      <Box flexDirection={["column", " ", "row"]} display={"flex"}>
        <Box>
          {
            // products[currentPage].productList.map((el, i) => <ProductItems key={i} {...el} />)
            tempData?.productList?.map((el, i) => (
              <ScrollingExample key={i} {...el} />
            ))
          }
        </Box>

        {/* Product and Offer Divider */}

        <Box mx={"60px"}>
          <Divider orientation="vertical" borderColor="gray.400" />
        </Box>

        <Box className="offers" width="60%" flexDirection={"column"}>
          <VStack
            className="H"
            overflow={"auto"}
            p={10}
            // className="offers"
            flexDirection={"column"}
          >
            <Box width={"full"} p="2" rounded={5} bg={"gray.400"}>
              <Heading size={"sm"}>Save 15% on every order </Heading>
              <p>GET Plus Now</p>
            </Box>
            <Box width={"full"} p="2" rounded={5} bg={"gray.400"}>
              <Heading size={"sm"}>Assured cashback on Paytm </Heading>
              <p>Upto 500 off</p>
            </Box>
            <Box width={"full"} p="2" rounded={5} bg={"gray.400"}>
              <Heading size={"sm"}>Mobikwik | Zip (Pay Later) </Heading>
              <p>Get 5% assured cashback</p>
            </Box>
            <Box width={"full"} p="2" rounded={5} bg={"gray.400"}>
              <Heading size={"sm"}>5% Simple cashback up to 750</Heading>
              <p>Get upto 750 cashback</p>
            </Box>
            <Box width={"full"} p="2" rounded={5} bg={"gray.400"}>
              <Heading size={"sm"}>15% off on Kotak cards</Heading>
              <p>15% off upto INR250</p>
            </Box>
            <Box width={"full"} p="2" rounded={5} bg={"gray.400"}>
              <Heading size={"sm"}>Upto 200 cashback</Heading>
              <p>on Amazon Pay</p>
            </Box>
            <Box width={"full"} p="2" rounded={5} bg={"gray.400"}>
              <Heading size={"sm"}>Assured cashback on Paytm </Heading>
              <p>Upto 500 off</p>
            </Box>

            <Box width={"full"} p="2" rounded={5} bg={"gray.400"}>
              <Heading size={"sm"}>Assured cashback on Paytm </Heading>
              <p>Upto 500 off</p>
            </Box>
            <Box width={"full"} p="2" rounded={5} bg={"gray.400"}>
              <Heading size={"sm"}> </Heading>
              <p>Upto 500 off</p>
            </Box>
          </VStack>
          <Box
            textAlign={"left"}
            zIndex={0}
            p="4"
            m="4"
            bg={"white"}
            position={"sticky"}
            bottom="0"
            justifyContent={"space-between"}
            display={"flex"}
          >
            <Box w={"full"}>
              <Heading>₹{totalCartValue}</Heading>
            </Box>
            <Box w={"full"}>
              <Link to="/cart">
                <Button
                  rounded={8}
                  h={"50px"}
                  width={"full"}
                  color="white"
                  bg={"rgb(111,67,229)"}
                >
                  View Cart
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
