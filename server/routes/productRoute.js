
const express = require("express");
const router = express.Router();
// const product = require('../models/productModel')
const {AddProduct,imageLink, allProducts,product,deleteOne} = require('../controllers/productController')
const {parseImageUpload} = require('../middlewares/multer')
const upload = require('../middlewares/upload');


router.get('/',(req,res)=>{
    console.log("first")
    res.write('Hello Product')
    res.end()
})

router.post("/image",upload.single('file'), imageLink);

router.post("/insert", AddProduct);
// router.post("/login", login);
router.get('/getAll',allProducts);
router.get('/get/:id',product);
router.delete('/delete/:id',deleteOne);



module.exports = router