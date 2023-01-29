import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Stack,
    Radio,
    RadioGroup,
    Button,
    Box,
    Img,
    Divider,
    Spacer,
    StackDivider,
  } from '@chakra-ui/react'
import { ProductItems } from './ProductItems'

export function PopUpForUSsafe(el) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  
    const btnRef = React.useRef(null)
    return (
      <>
        {
          <Box onClick={onOpen}>
            
            <Button my="4" background={"white"} w="8rem" border={"1px solid silver"} color={"black"}>US Safe</Button>
             {/* <ProductItems  {...el} />
            <Divider borderColor='gray.400' /> */}
          
        
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
          <ModalContent    >
            <ModalCloseButton />
            <ModalBody p="0.2" m="0" >
            <Box>
                    <img width={"100%"} src={el.img} alt="" />
            {/* <ModalHeader>{el.title}</ModalHeader> */}
                <Box>
                  <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_736,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1623752701818-e68567.jpeg" alt="img" />
                  <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_600,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1623753474030-d7dfc2.png" alt="img" />
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_600,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1654064794529-7abb36.png" alt="img" />
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_600,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1623753474806-c299a9.png" alt="img" />
                </Box>
                   
                   
                    
                </Box>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  

