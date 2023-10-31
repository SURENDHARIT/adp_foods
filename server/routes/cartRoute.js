
const express = require("express");
const { AddToCart, cart, deleteProduct } = require("../controllers/cartController");
const router = express.Router();


router.post("/add/:id", AddToCart);
// router.get('/getAll',allProducts);
router.get('/get/:id',cart);

router.delete('/delete/:user/products/:product',deleteProduct);

module.exports = router