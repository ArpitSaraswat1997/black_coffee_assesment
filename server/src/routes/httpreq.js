const express = require("express")
const router = new express.Router();
const OilData = require("../models/data")


router.post("/data",async(req,res)=>{
    try{
       const AllData = new OilData(req.body)
       console.log(req.body)
       AllData.save()
    }
    catch(e){
        res.status(400).send()
    
    }
    
    })
    
    router.get("/data",async(req,res)=>{
        try{
         const getData =  await OilData.find({})
         res.send(getData)
        }
        catch(e){
            res.status(400).send()
        
        }
        
        })
    
        router.get("/data/:id",async(req,res)=>{
            try{
    
                const _id =req.params.id;
             const getSingleData =  await OilData.findById(_id)
             res.send(getSingleData)
            }
            catch(e){
                res.status(400).send()
            
            }
            
            })
    
            router.delete("/data/:id",async(req,res)=>{
                try{
        
                    const _id =req.params.id;
                 const getSingleData =  await OilData.findByIdAndDelete(_id)
                 res.send(getSingleData);
                }
                catch(e){
                    res.status(400).send()
                
                }
                
                })
    module.exports=router;