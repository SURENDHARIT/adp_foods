const express = require('express')
const upload = require('../middlewares/upload')
const {uploadToCloudinary,removeFromCloudinary} =require('../cloudinary')
const product = require('../models/productModel');

module.exports.AddProduct = async (req, res) => {
        try{  
            console.log(req.body)
            
            const newProduct = await new product(req.body) 
            await newProduct.save();
            console.log(newProduct)
            res.json("Success")
        }
        catch(err){
            console.log("Error in insertion",err)
        }
  };

  module.exports.imageLink = async (req, res) => {
    try{
        console.log("first")
       if(req.file)
       {
        const data = await uploadToCloudinary(req.file.path,"user-images")
        console.log(data)
        res.json({url:data.url})
       }    
       else{
        console.log("else")
       }
    }
    catch(err){
        console.log("Error in insertion",err)
    }
};


module.exports.allProducts = async(req,res)=>{
    try{
        await product.find()
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.send(err)
        console.log(err)

        })
    }

    catch(err)
    {
        res.send(err)
        console.log(err)
    }
} 




module.exports.product = async(req,res)=>{
    try{
        console.log('one product')
        console.log(req.params.id)
        await product.findById(req.params.id)
        .then((data)=>{
            console.log(data)
            res.send(data)
        })
        .catch((err)=>{
            res.send(err)
        console.log(err)

        })
    }

    catch(err)
    {
        res.send(err)
        console.log(err)
    }
} 



module.exports.deleteOne = async(req,res)=>{
    try{
        console.log('one product')
        console.log(req.params.id)
        await product.findByIdAndDelete(req.params.id)
        .then((data)=>{
            console.log(data)
            res.send(data)
        })
        .catch((err)=>{
            res.send(err)
        console.log(err)

        })
    }

    catch(err)
    {
        res.send(err)
        console.log(err)
    }
} 

module.exports.AddProduct = async (req, res) => {
    try{  
        console.log(req.body)
        const newProduct = await new product(req.body) 
        await newProduct.save()
        console.log(newProduct)
        res.json("Success")

        
    }
    // catch(err){
    //     console.log("Error in insertion",err.message)
    //     // const errors = handleErrors(err);
    //     // res.json({ errors, status: false });
    // }
    catch (error) {
        console.log(error)
        if (error.code === 11000) {
          res.status(201).json('Duplicate key error. The product  already exists.')
        } else {
          res.status(201).json('An error occurred while saving the item.');
        }
    }
};
