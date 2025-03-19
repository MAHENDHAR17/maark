import express from 'express';
const app=express();
import mongoose from 'mongoose';
import prod from './models/product.js';
import cors from 'cors';
import multer from 'multer';
import path from 'path';



app.use(express.json());
app.use(cors());
app.use('/publick',express.static('publick'));

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://sh:sh@cluster0.iznuy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',console.log('db connected'));
 
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'publick'); // Specify folder for uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now()+path.extname(file.originalname)); // File naming convention
  }
});
const upload = multer({ storage });


app.post('/post',upload.single('IMAGE'),async(req,res) => {   //http://localhost:8888/post
      try{
        const{NAME,PRICE}=req.body;
        if(!NAME || !PRICE || !req.file){
          return res.status(400).send("please provide all the contant")
        }

       const newProduct = new prod({
        name:NAME,
        price:PRICE,
        image:req.file.path
    })
    await newProduct.save();
    res.json({products:newProduct});
  } catch (err){
    console.error(err);
    res.status(500).send("server error");
  }
});
 
app.delete('/delete/:id', async (req, res) => {  // http://localhost:8888/delete/:id
  try {
    const id = req.params.id;
    const deletedProduct = await prod.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully!' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Error deleting product. Please try again.' });
  }
});









  //    if(!(req.body._id)){
// return res.status(500).send('fill')}
// try{
//  const product = await prod.findByIdAndDelete( (_id));
//  if(!product){
//   return res.status(404).send('user not found');
//  }

// res.status(200).send('user deleted successfully');
// }catch (error) {
//   console.error('error deleting user',error.message);
//   res.status(500).send('server error');
// }
// });


// app.put('/put',async(req,res) => {
//   if(!(req.body.name)){
//     res.status(400) .send('full');
//   }
// try{
//   const productupdate = await prod.findOneAndUpdate(
//     { name:req.body.name},
//     {name:req.body.newname,price:req.body.price,image:req.body.image},
//     {new:true}
//   );
//     if(!(productupdate)){
//       res.status(400).send('user not found')}
//       res.status(200).send('updated')
// }catch(error){
//   console.error('error in update')
//   res.status(500).send('server error')
// }
// })                               //localhost:8888/post


app.get('/product',async(req,res)=>{     //http://localhost:8888/product
try{
  const products = await prod.find();
  res.json(products);}
  catch (error){
  res.status(500).json({message: 'error etching products'});
}
})
app.listen(8888,()=>{
  console.log('hello world');
});