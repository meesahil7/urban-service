

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
    //     <div>
    //       <img src={guide_Img} alt="pic" />
    //     </div>
    //   )
    // }
  
    if (time) {
      return (
        <div>
          <div>
            <h3>{title}</h3>
            <p>{price} <li>{time}</li></p>
            <hr />
            {para?.map((el) => <li key={el.id}>{el.para}</li>)}
            <button>Edit your package</button>
          </div>
          <div>
            <div>
            <button>Add</button>
            </div>
           
          </div>
        </div>
  
  
  
      )
    }
  
    if (!time&&!guide_Img&&!type) {
      // console.log(type)
      return (
        <div style={{display:"flex",border:"1px solid teal" , padding:"5px"}} >
           <div >
          <h3>{title}</h3>
          <p>star</p>
          <p>{price}</p>
          <hr />
          {para?.map((el)=><li key={el.id}>{el.para}</li>)}
          <button>View details</button>
        </div>
          <div>
            <div>
  
            <img width={"100%"} src={img} alt="img" />
            </div>
  
            <button>Add</button>
          </div>
        </div>
  
  
  
      )
    }
  
  }