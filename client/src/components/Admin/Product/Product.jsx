import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import './Product.css'

import veg from '../../../images/veg-icon.png'
import nv from '../../../images/nv-veg-icon.png'

export default function AdminProduct() {

    const id = useParams().id;
    console.log(id)
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get(`https://adpfoods.onrender.com//products/get/${id}`)
        .then((data)=>{
            setData(data.data)
            
            console.log(data.data)
        }) 
        .catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    <div className='full-page'>
        <Navbar/>

      

        <div className="product-page">

          
            {
                data.category==="Veg"?
                (<img src={veg} className='veg-nv-icon' alt="" />):
                (<img src={nv} className='veg-nv-icon' alt="" />)
            }
          

            <div className="product-img">
                <img src={data.image_url} alt="" />
            </div>

            <div className="product-details">
                <div className="product-name">
                    {data.p_name}
                </div>
                <div className="p-category">
                    {data.category}
                </div>
                <div className="price">
                    ₹ {data.price}
                </div>
                <div className="quantity">
                Quantity :  {data.quantity}
                </div>
                <div className="nop">
                Number of pieces:   {data.nop}
                </div>

                <div className="recipe-ingredients">
                    <button className='recipe-btn btn btn-warning'>
                        Recipe
                    </button>

                    <button className='ingredients-btn btn btn-warning'>
                        Ingredients
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
