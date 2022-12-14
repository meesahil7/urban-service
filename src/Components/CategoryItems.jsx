import { Img } from "@chakra-ui/react"

export const CategoryItems = ({ img, para }) => {

    return <div  >
      <div>
        <Img width={"100px"} src={img} />
        <p>{para}</p>
      </div>
  
    </div>
  }