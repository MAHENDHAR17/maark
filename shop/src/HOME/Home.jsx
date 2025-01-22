import React, { useRef } from 'react'
import Prod from '../product/Prod'
import "./home.css"

const Home = () => {

    let product=[{
     NAME:"MAHI",
     IMAGE:'https://assets.telegraphindia.com/telegraph/367ec959-2736-4def-92e3-a68b2304a8e7.jpg',
     PRICE:280  },
     {
        NAME:"HEMA",
        IMAGE:"https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg",
        PRICE:300
     },
      {NAME:"HEMA",
        IMAGE:"https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg",
        PRICE:300
     }   
    ]
    
  return (
    <div>
      <div className='mahi'>
        {product.map((mahi)=><Prod mahi={mahi}/>)}
        
      </div>
     <div className='add'>  
        <span><input type="file" placeholder='add'/>
         <input type="text" placeholder='name' />
         <input type="price" placeholder='price' /></span>
        <button>sub</button>
        <button>reload</button>
     </div>
    </div>
  )
}

export default Home
