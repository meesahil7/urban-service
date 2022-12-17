import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react'

function Services() {
    const cardData = [
        {
          logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png",
          service: "Salon For Women",
        },
        {
          logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/supply/customer-app-supply/1635331606894-7b633f.png",
          service: "Hair, Skin & Nails",
        },
        {
          logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png",
          service: "Women's Therapies",
        },
        {
          logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png",
          service: "Salon For Men",
        },
        {
          logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png",
          service: "Men's Therapies",
        },
      ];
  return (
    <div  style={{width:"100%"}}>
  <Box  w='100%' margin={'auto'} bg='white.100' boxShadow={'20px'} borderRadius='10px'>
        <Grid templateColumns='repeat(5, 1fr)'   w='100%'  >
        {  

            cardData.map((ele)=>{
                return(
                   
                    <GridItem w='55%' h='110px'  >
                    <Image src={ele.logo}  w='50%' h={'40%'} />
                    
                    <Text fontSize='14px' textAlign={'left'} marginTop='10px'>{ele.service}</Text>
                    </GridItem>
                    
                )
            })


        }
        </Grid>
        </Box>
    </div>
  )
}

export default Services