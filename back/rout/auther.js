import { Router } from "express";
import prodSchema from "../modules/product.js";

const router=Router()

router.post("/sinup",async(req,res)=>{   //localhost:8888/prod/sinup
    console.log(JSON.stringify(req.body))
    if(!(req.body.username && req.body.password && req.body.email)){
        res.status(400).send("bad")}
    
await new prod({
        name:req.body.name,
        price:req.body.price,
        image:req.body.image
    }).save()
    res.send("registered")
})


module.exports= router
