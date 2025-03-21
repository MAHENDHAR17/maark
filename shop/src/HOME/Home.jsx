import React, { useRef, useState, useEffect } from 'react'
import Prod from '../PRODUCT/Prod'
import "./home.css"
import axios from 'axios';



const Home = () => {


  let Name=useRef();
  let Price=useRef();
  let Image=useRef();

  const [products, setproduct] = useState([]);




   const sub= async() =>{
    if(Name.current.value === ""||Price.current.value === 0 ||Image.current.files.length === 0) {
      console.log("fill all the boxes")
      return;
     }
       const formdata = new FormData();
       formdata.append("NAME",Name.current.value)
       formdata.append("PRICE",Price.current.value)
       formdata.append("IMAGE",Image.current.files[0])
       try{
        const response = await axios.post('http://localhost:8888/post',formdata,{
          headers:{
            'content-type': 'multipart/form-data',
          },
         
        })
      console.log('response from server:', response.data);
    setproduct((prevproducts) => [...prevproducts, response.data.products]);

    Name.current.value = '';
    Price.current.value = '';
    Image.current.value = null;
  } catch(error) {
    console.error('error submitting from:',error);
  }
  }

  const dele = async (_id) => {
    
    try {
      const response = await axios.delete(`http://localhost:8888/delete/${_id}`)
      console.log('Product deleted:', response.data)
      // Remove the deleted product from the state
      setproduct((prevProducts) => prevProd.filter((prod) => prod._id !== _id))
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  };


  useEffect(()=>{
    axios.get('http://localhost:8888/product')
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
        {products.map((product)=>(<Prod key={product._id}mahi={product}  onDelete={dele}/>))}

      </div>
     <div className='add'>  
        <span><input type="file" placeholder='add'ref={Image}/>
         <input type="text" placeholder='Name' ref={Name}/>

         <input type="number" placeholder='price' ref={Price}/></span>
        <button onClick={sub}>sub</button>
        <button>reload</button>
     </div>
    </div>
  )
};

export default Home;
