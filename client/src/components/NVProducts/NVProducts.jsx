import React from 'react'
import Navbar from '../Navbar/Navbar'
import zippy from '../../images/zippy.png'
import zippy_logo from '../../images/zippy logo.png'

import './NVProducts.css'
import ProductCard from '../ProductCard/ProductCard'
import Footer from '../Footer/Footer'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import TodayOffer from '../TodayOffer/TodayOffer'

export default function NVProducts() {

    const[data,setData] = useState([])

    const[search,setSearch] = useState('')

    useEffect(()=>{
        axios.get("https://adp-foods.onrender.com/products/getAll")
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

        <h2 className='product-type' >Non - Veg Prodcuts</h2>
        <p className='quote'>
        Chicken Ready to Fry 
        </p>
        <div className="search-box">
            <input type="search" name="" id="" onChange={(e)=>{setSearch(e.target.value)}} placeholder='Search What you Love'/>
        </div>

        <div className="product-card-group">
            {
                 data.filter((item)=>{return item.p_name.toLowerCase().includes(search.toLowerCase())}).filter((item)=>{return item.category=="Non Veg"}).map((item)=>{
                    return(
                      <>
                      <ProductCard item={item} />
                      <ProductCard item={item} />
                      </>
                    )
                })
            }
        </div>

        {/* <div className="product-card-group">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>

        <div className="product-card-group">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div> */}

    <Footer/>
    </>
  )
}
