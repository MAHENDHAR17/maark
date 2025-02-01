import React, { useRef } from 'react'
import "./prod.css"

const Prod = ({mahi}) => {

  return (
    <div>
      <div className='prodbox'>

        <span className='span1'>{mahi.NAME}  </span>
        <img src={mahi.IMAGE} alt=""  />
        <span>price :</span>
        <span>{mahi.PRICE}</span>
      </div>
    </div>
  )
}

export default Prod
