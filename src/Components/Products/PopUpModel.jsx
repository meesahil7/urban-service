import {
  Box, Button, Divider, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartData, postCartData } from "../../Redux/Cart/action";
import { ProductItems } from "./ProductItems";

export function ScrollingExample(params) {
  const cart = useSelector((store) => store.CartReducer.cart);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");

  const handleAddToCart = () => {
    let Check = false;
    cart.forEach((el) => {
      if (el.id == params.id) {
        Check = true;
        return;
      }
    });

    if (Check) {
      alert("Product is already added");
      return;
    } else {
      let newCartData = {
        id: params.id,
        title: params.title,
        price: params.price,
        time: params.time,
        para: params.para,
        img: params.img,
        qty:1
      };
      
      dispatch(postCartData(newCartData))
      dispatch(addCartData(newCartData));
      alert("Product added successfully");
    }
  };

  const btnRef = React.useRef(null);
  return (
    <>
      {
        <Box onClick={onOpen}>
          <ProductItems {...params} />
          <Divider borderColor="gray.400" />
        </Box>
      }

      <Modal
        size="xl"
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay
          // border={0}
          backdropFilter="auto"
          backdropBrightness="28%"
        />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p="0.2" m="0">
            <Box>
              <img width={"100%"} src={params.img} alt="" />
              <ModalHeader>{params.title}</ModalHeader>
              <ProductItems {...params} />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={handleAddToCart}
              rounded={8}
              h={"50px"}
              width={"50%"}
              color="white"
              bg={"rgb(111,67,229)"}
            >
              Add To Cart
            </Button>
            {/* <Button onClick={handleAddToCart}> Add To Cart </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
