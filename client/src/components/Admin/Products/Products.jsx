import React from 'react'
import Navbar from '../../Navbar/Navbar'
import zippy from '../../../images/zippy.png'
import zippy_logo from '../../../images/zippy logo.png'

import Footer from '../../Footer/Footer'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

export default function AdminProducts() {

    const navigate = useNavigate()
    const[data,setData] = useState([])

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

        <div className="search-box">
            <input type="search" name="" id="" placeholder='Search What you Love'/>
        </div>

        <div className="product-card-group">
            {
                data.map((item)=>{
                    return(
                      <>
                         <div className='card product-card'>
                            <img src={item.image_url} className='card-image' alt="" /> 

                            <div className="card__overlay">
                                <div class="overlay__text">
                                <h3>{item.p_name}</h3>
                                </div>
                            </div>

                            <div className="product-buttons mt-3">
                                <button onClick={()=>{
                                     axios.delete(`http://localhost:2882/products/delete/${item._id}`)
                                     .then((data)=>{
                                         console.log(data)
                                         navigate('/admin/products/')
                                     })
                                     .catch((err)=>{
                                         console.log(err)
                                     })
                                }}>
                                    Delete
                                </button>
                                <button onClick={()=>{
                                    navigate(`/admin/product/${item._id}`)
                                }}>
                                    View
                                </button>
                            </div>

                        </div>
                      </>
                    )
                })
            }
        </div>
    <Footer/>
    </>
  )
}
