import React, { useRef } from 'react'
import "./prod.css"

const Prod = ({mahi}) => {

  return (
    <div>
      <div className='prodbox'>

        <span className='span1'>{mahi.name}  </span>
        <img src={`http://localhost:8888/public/${mahi.image}`} alt=""  />
        <span>price :</span>
        <span>{mahi.price}</span>
      </div>
    </div>
  )
}

export default Prod
