import React, { useRef } from 'react'
import "./prod.css"

const Prod = ({mahi,onDelete}) => {
  

  return (
    <div>
      <div className='prodbox'>

        <span className='span1'>{mahi.name}  </span>
        <img src={`http://localhost:8888/${mahi.image}`} alt={mahi.image}  />
        <span>price :</span>
        <span>{mahi.price}</span><br/>
        <button onClick={() => onDelete(mahi._id)}>delete</button>
      </div>
    </div>
  )
}

export default Prod
