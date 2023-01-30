import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
function Services() {
  const cardData = [
    {
      logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png",
      service: "Salon For Women",
      route: "/products/salon_for_women",
    },
    {
      logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/supply/customer-app-supply/1635331606894-7b633f.png",
      service: "Hair, Skin & Nails",
      route: "/topheading",
    },
    {
      logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png",
      service: "Women's Therapies",
      route: "/topheading",
    },
    {
      logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png",
      service: "Salon For Men",
      route: "/products/salon_for_men",
    },
    {
      logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png",
      service: "Men's Therapies",
      route: "/topheading",
    },
  ];
  return (
    <div
      style={{
        position:"relative",
        bottom:"60px",
        borderRadius:".3rem",
        paddingRight:"2rem",
        paddingLeft:"2rem"
        ,
       
        paddingTop:".4rem",
        paddingBottom:".4rem",
        width: "50%",
        // height: "160px",
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
        background: "white",
      }}
    >
      <Box
        w="100%"
        margin="auto"
        bg="white.100"
        boxShadow={"20px"}
        borderRadius="10px"
      >
        <Grid templateColumns="repeat(5, 1fr)" m="auto" gap={"10px"} w="100%">
          {cardData.map((ele, index) => {
            return (
              <GridItem 
              w="100%"
                key={index}>
                <Link to={ele.route}>
                  <Box h="50%">
                    <Image src={ele.logo} w="70%" h={"80%"} m="auto" />
                  </Box>
                  <Box h="50%">
                    <Text
                      fontSize="16px"
                      as="b"
                      textAlign={"left"}
                      marginTop="10px"
                    >
                      {ele.service}
                    </Text>
                  </Box>
                </Link>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}
export default Services;
