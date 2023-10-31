const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser')

const connectDB = require('./db')

const authRoute = require("./routes/authRoute");
const cartRoute = require("./routes/cartRoute");
const productRouter = require('./routes/productRoute')

const app = express()

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/products',productRouter)

app.use('/auth',authRoute)

app.use('/cart',cartRoute)

app.listen(2882,()=>{
    console.log("Serving at port 2882")
    connectDB()
})