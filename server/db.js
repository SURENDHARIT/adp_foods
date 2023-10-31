const mongoose = require('mongoose')

const connectDB = ()=>{
    mongoose.connect("mongodb+srv://surendhar:surendhar@cluster0.fyt3kru.mongodb.net/?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("Database connected successfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = connectDB
// exports.module=connectDB
