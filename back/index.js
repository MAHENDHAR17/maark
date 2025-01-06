import express from 'express';
const app=express();
import mongoose from 'mongoose';
import prod from './models/product.js';
import cors from 'cors'


app.use(express.json());
app.use(cors());

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://sh:sh@cluster0.iznuy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',console.log('db connected'));
 
}


app.post('/post',async(req,res) => {
  console.log(JSON.stringify(req.body))
  if(!(req.body.name && req.body.price && req.body.image)){
      res.status(400).send("fill ")}

      try{

      await new prod({
        name:req.body.name,
        price:req.body.price,
        image:req.body.image
    }).save();
    res.send("registered");
  } catch (err){
    console.error(err);
    res.status(500).send("server error");
  }
})


app.delete('/delete',async(req,res) => {
  const {name}=req.body;

   if(!name){
res.status(500).send('fill')}
try{
 const prod = await prod.findOneAndDelete({ name });
 if(!prod){
  return res.status(404).send('user not found');
 }

 res.status(200).send('user deleted successfully');
}catch (error) {
  console.error('error deleting user',error.message);
  res.status(500).send('server error');
}

})
app.listen(8888,()=>{
})