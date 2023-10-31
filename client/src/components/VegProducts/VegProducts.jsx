import React from 'react'
import Navbar from '../Navbar/Navbar'
import zippy from '../../images/zippy.png'
import zippy_logo from '../../images/zippy logo.png'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

import './VegProducts.css'
import ProductCard from '../ProductCard/ProductCard'
import Footer from '../Footer/Footer'

export default function VegProducts() {

    const[data,setData] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:2882/products/getAll")
        .then((data)=>{
            console.log(data.data)
            setData(data.data)
        })
        },[])

  return (
    <>
        <Navbar/>
        <div className="zippy">
            <img src={zippy} alt="" />
        </div>

        <div className="zippy-logo">
            <img src={zippy_logo} alt="" />
        </div>

        <h2 className='product-type' >Veg Prodcuts</h2>

        <p className='quote'>
        Chicken Ready to Fry 
        </p>

        <div className="search-box">
            <input type="search" name="" id="" placeholder='Search What you Love'/>
        </div>

        <div className="product-card-group">
        {
                data.filter((item)=>{return item.category=="Veg"}).map((item)=>{
                    return(
                      <>
                      <ProductCard item={item} />
                      <ProductCard item={item} />
                      <ProductCard item={item} />
                      <ProductCard item={item} />

                      </>
                    )
                })
            }
        </div>

        <Footer/>

    </>
  )
}
