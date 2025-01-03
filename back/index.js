import express from 'express';
const app=express();
import mongoose from 'mongoose';
import cors from 'cors'
import route from './rout/auther.js'

app.use(express.json())
app.use(cors())

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://sh:sh@cluster0.iznuy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',console.log('db connected'))
 
}
app.use('/post',route) //localhost:8888/post/

app.listen(8888,()=>{
  console.log('hello')
})