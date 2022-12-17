import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Flex, Heading, HStack, Image, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { GoTriangleDown } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import Services from '../Services/Services';
import styles from './TopHeading.module.css'
function TopHeading() {
 
  return (
    <div>

       <Box>
      <Box className={styles.homeTopBox}>
        <Container color="whitesmoke" fontSize={"12px"}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              {/* <BreadcrumbLink href="#">{selectedCity}</BreadcrumbLink> */}
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
        <Heading
          as={"h1"}
          fontSize="48px"
          fontWeight="500"
          color="white"
          lineHeight={"72px"}
        >
          Home services, on demand.
        </Heading>
        <br />
        <br />
        <Container
          maxW="3xl"
          lineHeight={"24px"}
          h="300px"
          mt="20%"
          position="absolute"
        >
          <Flex h="60px" justifyContent={"space-between"}>
            <Flex
              alignItems={"center"}
              bgColor={"whitesmoke"}
              borderRadius="5px"
              w="25%"
            >
              <Image
                w="35px"
                src="https://images.urbanclap.com/image/upload//q_auto,f_auto,fl_progressive:steep/t_medium_res_template/v1514444369/Flag_of_India_28Dec2017-1.png"
                alt="flag"
                m="5%"
              />
              {/* <Text>{selectedCity}</Text> */}
              <Popover isLazy>
                <PopoverTrigger>
                  <Button bg="whitesmoke">
                    <GoTriangleDown />
                  </Button>
                </PopoverTrigger>
                <PopoverContent mt="3%" w="50vh" h="150px">
                  <PopoverHeader fontWeight="semibold">
                    <Flex
                      justifyContent={"space-between"}
                      alignItems="center"
                      w="90%"
                    >
                      <GrLocation mt="-2%" />
                      <Text>Current Location</Text>
                      <Text color="purple.600">detect using gps </Text>
                    </Flex>
                  </PopoverHeader>
                  <PopoverArrow ml="-8rem" />
                  <PopoverCloseButton />
                  <PopoverBody mt="3%" h="40%">
                    <Flex w="100%" h="100%">
                      <Button
                        className={styles.popOverButton}
                        bg="white"
                        borderRadius={"5px 0 0 5px"}
                      >
                        <AiOutlineSearch />
                      </Button>
                      <Input
                        className={styles.popOverInput}
                        autoFocus
                        focusBorderColor="none"
                        placeholder="Search for Society/ Appartment.."
                      />
                    </Flex>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Flex w="70%" h="100%" >
              <Button
                borderRadius={"5px 0 0 5px"}
                h="100%"
                bg="whitesmoke"
                fontSize={"30px"}
                pb="5%"
              >
                <AiOutlineSearch />
              </Button>
              <Input
                // value={inputText}
                // onChange={handleInputChange}
                w="100%"
                borderRadius={"0 5px 5px 0"}
                h="100%"
                bg="whitesmoke"
                focusBorderColor="none"
                placeholder="Search for services"
              />
            </Flex>
          </Flex>
         
        </Container>

        <br />
        <Container color="white" marginLeft="37%">
          <Breadcrumb separator=",">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Women's Therapies</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Salon for Men</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Men's Therapies</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
        
    
      </Box>
      {/* <ServicesCategory data={cardData} /> */}
      
    </Box>

    <HStack boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'} width={'50%'} margin='auto' left='400px' justifyContent={'center'} position='absolute' top={'600px'} bg='white'  >
      <Services  />
      </HStack>
    </div>
  )
}

export default TopHeading