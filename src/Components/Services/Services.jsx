import { Box, Grid, GridItem, Image, SimpleGrid, Text } from '@chakra-ui/react';
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
    <div  style={{width:"50%",border:'2px solid red'}}>
     
  <Box  w='100%' margin="auto" bg='white.100' boxShadow={'20px'} borderRadius='10px' >
        <SimpleGrid columns={{ base: 2, sm: 2, md: 4, lg: 5 }}
  gap={'10px'}  w='100%'  >
        {  

            cardData.map((ele)=>{
                return(
                   
                    <Box w='100%' h='150px' border={'2px solid red'} >
                      <Box border={"2px solid red"} h='60%'   >
                    <Image src={ele.logo}  w='70%' h={'80%'} m='auto'/>
                    </Box>
                    <Box border={"2px solid red"} h='40%' textAlign={'center'}>
                    <Text noOfLines={[1,2,2]} fontSize='15px' as={'b'}  marginTop='10px'>{ele.service}</Text>
                    </Box>
                    </Box>
                    
                )
            })


        }
        </SimpleGrid>
        </Box>
    </div>
  )
}

export default Services