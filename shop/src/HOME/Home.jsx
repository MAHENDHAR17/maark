import React, { useRef, useState, useEffect } from 'react'
import Prod from '../product/Prod'
import "./home.css"
import axios from 'axios';

const Home = () => {


  let Name=useRef();
  let Price=useRef();
  let Image=useRef();

  const [products,setproduct]=useState([]);



   const mahi= async() =>{
    if(Name.current.value === ""||Price.current.value === ""||Image.current.file.length === 0){
      console.log("fill all the boxes")
      return;
     }
       const formdata = new FormData();
       formdata.append("NAME",Name.current.value)
       formdata.append("PRICE",Price.current.value)
       formdata.append("IMAGE",Image.current.file[0])
       try{
        const response = await axios.post('http://localhost:8888/post',formdata,{
          headers:{
            'content-type': 'multipart/from-data',
          },
         
        })
      console.log('response from server:', response.data);
    setproduct((prevproducts) => [...prevproducts, response.data.products]);

    Name.current.value = '';
    Price.current.value = '';
    Image.current.value = '';
  } catch(error) {
    console.error('error submitting from:',error);
  }
  }
  useEffect(()=>{
    axios.get('http://localhost:8888/products')
    .then((response) => {
      setproduct(response.data);
    })
    .catch((error) =>{
      console.log('there was an error',error)
    });
  },[]);
    
    
  return (
    <div>
      <div className='mahi'>
        {products.map((mahi)=>(<Prod key={mahi.id}mahi={mahi}/>))}
        
      </div>
     <div className='add'>  
        <span><input type="file" placeholder='add'ref={Image}/>
         <input type="text" placeholder='name' ref={Name}/>

         <input type="number" placeholder='price' ref={Price}/></span>
        <button onClick={mahi}>sub</button>
        <button>reload</button>
     </div>
    </div>
  )
};

export default Home;
