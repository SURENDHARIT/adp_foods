const express = require('express')
const cart = require('../models/cartModel');


module.exports.AddToCart = async (req, res) => {
        try{  
            const userId = req.params.id;
            console.log(userId,req.body)
            // const existingItem = await client
            // .db()
            // .collection('cart')
            // .findOne({ item: item, userId: userId });

            await cart.find({user:userId,})
            // console.log(req.body)
            
            // const newProduct = await new product(req.body) 
            // await newProduct.save();
            // console.log(newProduct)
            // res.json("Success")
        }
        catch(err){
            console.log("Error in insertion",err)
        }
  };


  module.exports.AddToCart = async (req, res) => {
    try {

        const userId = req.params.id;
        const productId = req.body.productId; 
        const quantity = req.body.quantity 
        // Find the user's cart or create a new one if it doesn't exist yet
        const Cart = await cart.findOneAndUpdate(
          { user: userId },
          { $setOnInsert: { user: userId, items: [] } },
          { upsert: true, new: true }
        );
    
        // Find the index of the product in the cart's items array, if it exists
        const itemIndex = Cart.items.findIndex(item => item.product.toString() === productId);
    
        if (itemIndex !== -1) {
          // If the product is already in the cart, update the quantity
          Cart.items[itemIndex].quantity += quantity;
        } else {
          // If the product is not yet in the cart, add it as a new item
          Cart.items.push({ product: productId, quantity });
        }
    
        // Save the updated cart document
        await Cart.save();

        console.log(Cart)
    
        res.send(Cart);
      } catch (error) {
        console.error(error);
        throw error;
      }
  }


// module.exports.allProducts = async(req,res)=>{
//     try{
//         await product.find()
//         .then((data)=>{
//             res.send(data)
//         })
//         .catch((err)=>{
//             res.send(err)
//         console.log(err)

//         })
//     }

//     catch(err)
//     {
//         res.send(err)
//         console.log(err)
//     }
// } 




module.exports.cart = async(req,res)=>{
    try{
        console.log('one product')
        console.log(req.params.id)
        await cart.findOne({user:req.params.id})
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

module.exports.deleteProduct = async(req,res)=>{
    // try{
    //     console.log('one product')
    //     console.log(req.params.user,req.params.product)
    //     await cart.findByIdAndUpdate(req.params.user,
    //         { $pull: { items: { product:req.params.product } } },
    //         { new: true }
    //     )
    //     .then((data)=>{
    //         console.log("deleted")
    //         res.send(data)
    //     })
    //     .catch((err)=>{
    //         res.send(err)
    //     console.log(err)

    //     })
    // }


    try {
        console.log('Deleting product:', req.params.product, 'from cart:', req.params.user);
        const updatedCart = await cart.findOneAndUpdate(
            req.params.user,
            { $pull: { items: { product: req.params.product } } },
            { new: true }
          ).then((data)=>{
            console.log(data)
          })
        console.log('Cart after deletion:', updatedCart);
        res.send(updatedCart);
      } catch (err) {
        console.error('Error deleting product:', err);
        res.status(500).send(err);
      }
} 




// module.exports.deleteOne = async(req,res)=>{
//     try{
//         console.log('one product')
//         console.log(req.params.id)
//         await product.findByIdAndDelete(req.params.id)
//         .then((data)=>{
//             console.log(data)
//             res.send(data)
//         })
//         .catch((err)=>{
//             res.send(err)
//         console.log(err)

//         })
//     }

//     catch(err)
//     {
//         res.send(err)
//         console.log(err)
//     }
// } 

// module.exports.AddProduct = async (req, res) => {
//     try{  
//         console.log(req.body)
        
//         const newProduct = await product.findByIdAndUpdate({}) 
//         await newProduct.save();
//         console.log(newProduct)
//         res.json("Success")
//     }
//     catch(err){
//         console.log("Error in insertion",err)
//     }
// };
