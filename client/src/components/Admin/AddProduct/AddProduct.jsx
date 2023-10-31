import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './AddProduct.css'
import Navbar from '../Navbar/Navbar';

export default function AddProduct() {

  const navigate = useNavigate()

  const [values, setValues] = useState({});
  const [image, setImage] = useState([]);

  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });


  const handleSubmit = async (event) => {

    event.preventDefault();
    console.log(values)

      let formData=new FormData();
    formData.append("file",image)
    //  formData.append("upload_preset","blogpost")

   console.log(formData)
     await axios.post("https://adp-foods.onrender.com/products/image",formData,{ headers: {
      'Content-Type': 'multipart/form-data'
  }}
     ).then((response)=>{
      console.log(response.data.url)
      // setValues({ ...values, [e.target.name]: e.target.value })
      setValues({ ...values, 'image_url': response.data.url })
      console.log(values.url) 
  })
  .catch((err)=>{
    console.log(err)
  })

  console.log(values)
  
  await axios.post("http://localhost:2882/products/insert",values,{ headers: {
      'Content-Type': 'application/json'
  }}
     ).then((response)=>{
      // const fileName=response.url;
      console.log("first")
      console.log(response) 
      
      console.log(response.status)

      if(response.status==201)
      {
        generateError(response.data);
      }
      else
      {
        navigate('/admin/products')
      }            
  })
  .catch((err)=>{
    
    console.log(err)
  })


  }
  const [ingredients, setIngredients] = useState(['']);
  const [recipe, setRecipe] = useState(['']);


  function handleAddInput() {
    const newInputs = [...ingredients, ''];
    setIngredients(newInputs);

  }

  function handleAddInput1() {
    const newInputs = [...recipe, ''];
    setRecipe(newInputs);

  }

  function handleInputChange(event, index) {
    const newInputs = [...ingredients];
    newInputs[index] = event.target.value;
    setIngredients(newInputs);
    setValues({ ...values, ingredients: ingredients })
  }

  function handleInput1Change(event, index) {
    const newInputs = [...recipe];
    newInputs[index] = event.target.value;
    setRecipe(newInputs);
    setValues({ ...values, recipe: recipe })

  }



  return (
    <>
    {/* <Navbar/> */}
    <div className="front body">
      <div className="container login-container">
        <h2 className='text-white'>Add Product</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* <div> */}

           <div className="form">
           <input class="form-control"
              type="text"
              name="p_name"
              placeholder="Product Name"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />


            <div className="category">
              <span className='label-category'>
              Category
              </span>
            <div class="form-check">

              <input class="form-check-input" type="radio" name="category" onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              } id="flexRadioDefault1" value="Non Veg" />
              <label class="form-check-label" for="flexRadioDefault1">
                Non Veg
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="category" onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              } id="flexRadioDefault2" value="Veg" required />
              <label class="form-check-label" for="flexRadioDefault2">
                Veg
              </label>
            </div>
            </div>



          {/* </div>
          <div> */}
          <input class="form-control" type="file" name="image" className="form-control"   onChange={(e)=>{setImage(e.target.files[0]);console.log(image)} } required />
          {/* </div> */}

        


          {ingredients.map((input, index) => (
            <input class="form-control"
              key={index}
              value={input}
              placeholder={`Ingredient ${index + 1}`}
              onChange={(event) => handleInputChange(event, index)}
            />
          ))}
          <button type='button' onClick={handleAddInput}>Add Input</button>

          {recipe.map((input, index) => (
            <input class="form-control"
              key={index}
              value={input}
              placeholder={`Recipe Step ${index + 1}`}
              onChange={(event) => handleInput1Change(event, index)}
            />
          ))}
          <button type='button' onClick={handleAddInput1}>Add Input</button>



          <input class="form-control"
              type="number"
              placeholder="Price (in Rs)"
              name="price"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />



          {/* <div> */}
            <input class="form-control"
              type="number"
              placeholder="Quantity (in grams)"
              name="quantity"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          {/* </div> */}

          {/* <div> */}
            <input class="form-control"
              type="number"
              placeholder="Number of pieces"
              name="nop"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
           </div>
          {/* </div> */}

          <div className='w-100 submit-btn'>
          <button type="submit">Submit</button>
          </div>
        
        </form>
        <ToastContainer />
      </div>
    </div>
    </>
  )
}
