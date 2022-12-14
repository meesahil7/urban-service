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
  } from '@chakra-ui/react'
import { ProductItems } from './ProductItems'

export function ScrollingExample(el) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  
    const btnRef = React.useRef(null)
    return (
      <>
        {/* <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
          <Stack direction='row'>
            <Radio value='inside'>inside</Radio>
            <Radio value='outside'>outside</Radio>
          </Stack>
        </RadioGroup> */}
        <Box  onClick={onOpen} border="1px">
        <ProductItems  {...el} />

        {/* <Button mt={3}  onClick={onOpen}>
        </Button> */}
        </Box>
         
  
        <Modal
            
            size="xl"
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay  backdropFilter="auto" 
        backdropBrightness="28%"
        />
          <ModalContent    >
            <ModalCloseButton />
            <ModalBody p="0.2" m="0" >
                <div>
                    <img width={"100%"} src={el.img} alt="" />
            <ModalHeader>{el.title}</ModalHeader>
                <ProductItems  {...el} />
                   
                   
                    
                </div>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  

