const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: "ditnlvuxi",
    api_key: "177372589538598",
    api_secret: "smxzt7RbpXf1p38xzoO-jBu5lzA"
  });

//   const res = cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', {public_id: "olympic_flag"})

// res.then((data) => {
//   console.log(data);
//   console.log(data.secure_url);
// }).catch((err) => {
//   console.log(err);
// });


// // Generate 
// const url = cloudinary.url("olympic_flag", {
//   width: 100,
//   height: 150,
//   Crop: 'fill'
// });



// // The output url
// console.log(url);


uploadToCloudinary = (path,folder) =>{
    return cloudinary.v2.uploader.upload(path,{
        folder
    })
    .then((data)=>{
        return {url:data.url,public_id:data.public_id};
    })
    .catch((err)=>{
        console.log(err)
    })
}

removeFromCloudinary = async(public_id)=>{
    await cloudinary.v2.uploader.destroy(public_id,function(error,result){
        console.log(result,error)
    })
}

module.exports = {uploadToCloudinary,removeFromCloudinary}