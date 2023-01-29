import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Img,
  Spacer,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartData } from "../../Redux/Cart/action";


export const ProductItems = ({
  id,
  title,
  price,
  time,
  para,
  type,
  guide_Img,
  img,
}) => {
  const cart = useSelector((store) => store.CartReducer.cart);

  const dispatch = useDispatch();





  if (type == "guide") {
    return (
      <Box id={id} textAlign={"left"}>
        <Box my={"4"}>
          <Heading>{title}</Heading>
        </Box>
        <br />

        <Img rounded={10} width="95%" src={guide_Img} alt="pic" />
        <br />
      </Box>
    );
  }

  if (time && !img) {
    return (
      <Box display={"flex"} p="10" justifyContent="space-around">
        <Box textAlign={"left"} width="80%">
          <Heading size={"l"}>{title}</Heading>
          <HStack>
            {" "}
            <Heading size={"l"}>₹ {price}</Heading> <li>{time}</li>
          </HStack>
          {/* <hr /> */}
          <Box my={2}>
            <Divider borderColor="blackAlpha" />
          </Box>
          {para?.map((el) => (
            <li key={el.id}>{el.para}</li>
          ))}
          <Button>Edit your package</Button>
        </Box>
        <Box width={"15%"}>
          <Box display={"flex"} justifyContent="end">
            <Button
              // onClick={handleAddToCart}

              textColor={"violet"}
            >
              Add
            </Button>
          </Box>
        </Box>
        {/* <Divider  borderColor='black.200' /> */}
      </Box>
    );
  }

  // Products With Image
  if (!time) {
    return (
      <Box display={"flex"} p="10" justifyContent="space-around">
        <Box
          flexDirection={"column"}
          display={"flex"}
          justifyContent={"space-between"}
          textAlign={"left"}
          width="80%"
        >
          <Heading size="l">{title}</Heading>
          <p>star</p>
          <Heading size={"l"}>Starts at ₹ {price}</Heading>
          {/* <hr /> */}
          <Box my={2}>
            <Divider borderColor="black.200" />
          </Box>
          {para?.map((el) => (
            <li key={el.id}>{el.para}</li>
          ))}
          <Box>
            <Button textColor="violet" variant={"ghost"}>
              View details
            </Button>
          </Box>
        </Box>
        <Box margin={"auto"} width={"15%"}>
          <Box>
            <Box>
              <Img rounded={"10"} width={"100%"} src={img} alt="img" />
            </Box>
          </Box>

          <Button
            // onClick={handleAddToCart}

            position={"relative"}
            top="-15px"
          >
            Add
          </Button>
        </Box>
      </Box>
    );
  }
};
