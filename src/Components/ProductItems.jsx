

//products data structure
//               "id": "1",
//               "title": "Full chocolate | chocolate roll-on wacxing",
//               "price": "₹849",
//               "time": "1 hr 5 mins",
//               "para": [
//                 {
//                   "id": "1",
//                   "para": "Eyebrow threading"
//                 },
//                 {
//                   "id": "2",
//                   "para": "Chocolate full arms, underarms, full legs"
//                 },
//                 {
//                   "id": "3",
//                   "para": "Upper lip threading"
//                 }
//               ]
//             },

import { Box, Button, Img } from "@chakra-ui/react"



//               "id": "1",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657100967218-f08380.png",
//               "title": "Full body",
//               "price": "₹1399",
//               "para": [
//                 {
//                   "id": "1",
//                   "para": "O3+ shine & glow facial"
//                 },
//                 {
//                   "id": "2",
//                   "para": "Upper lip threading"
//                 }
//               ]
//             },

export const ProductItems = ({ id, title, price, time, para, type, guide_Img, img }) => {

  // if (type == "guide") {
  //   // console.log(type)
  //   return (
  //     <Box>
  //       <img src={guide_Img} alt="pic" />
  //     </Box>
  //   )
  // }

  if (time) {
    return (
      <Box display={"flex"} p="10" justifyContent="space-around"  >
        <Box textAlign={"left"}  width="80%" >

          <h3>{title}</h3>
          <p>{price} <li>{time}</li></p>
          <hr />
          {para?.map((el) => <li key={el.id}>{el.para}</li>)}
          <Button>Edit your package</Button>
        </Box>
        <Box margin={"auto"} width={"15%"}  >
          <Box>
            <Button textColor={"violet"} >Add</Button>
          </Box>

        </Box>
      </Box>



    )
  }

  if (!time && !guide_Img && !type) {
    // console.log(type)
    return (
      <Box display={"flex"} p="10" justifyContent="space-around"  >
        <Box flexDirection={"column"} display={"flex"} justifyContent={"space-between"} textAlign={"left"}  width="80%" >
          <h3>{title}</h3>
          <p>star</p>
          <p>{price}</p>
          <hr />
          {para?.map((el) => <li key={el.id}>{el.para}</li>)}
          <Box>

          <Button textColor="violet" variant={"ghost"} >View details</Button>
          </Box>
        </Box>
        <Box margin={"auto"} width={"15%"}  >
          <Box  >
            <Box >
              <Img rounded={"10"} width={"100%"} src={img} alt="img" />

            </Box>
          </Box>

          <Button position={"relative"} top="-15px">Add</Button>
        </Box>

      </Box>



    )
  }

}