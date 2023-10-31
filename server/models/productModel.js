const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  p_name: {
    type: String,
    "default":"",
    required: [true, "Product name is required"],
    unique: true,
  },
  price:{
    type:Number,
    required:[true,"Enter price"]
  },
  image_url:{
    type:String,
    required:[true,"Upload the image"]
  },
  ingredients : { 
    type : Array , 
    "default" : [],
    required:[true,"Ingredients is required"] 
  },
  recipe:{
    type:Array,
    "default":[],
    required:[true,"Recipe is required"],
  }, 
  quantity:{
    type:Number,
    required:[true,"Quantity is required"]
  },
  nop:{
    type:Number,
    required:[true,"Number of pieces is required"]
  },
  category:{
    type:String,
    required:[true,"Veg / Non veg category is required"]

  }
});



module.exports = mongoose.model("Products", productSchema);
