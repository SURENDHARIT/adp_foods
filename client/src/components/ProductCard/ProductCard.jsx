import React from 'react'
import './ProductCard.css'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

import veg from '../../images/veg-icon.png'
import nv from '../../images/nv-veg-icon.png'

export default function ProductCard(props) {
  const[data,setData] = useState([])
  const {item} = props

  console.log("item")
 
  return (
    // <div style={{backgroundImage:`url(${item.image_url})`}} className='card product-card'>
    <>
    <a href={`/product/${item._id}`}>
    <div className='card product-card'>

    {
                item.category==="Veg"?
                (<img src={veg} className='veg-nv-icon' alt="" />):
                (<img src={nv} className='veg-nv-icon' alt="" />)
            }

          <img src={item.image_url} className='card-image' alt="" /> 

      <div className="card__overlay">
          <div class="overlay__text">
          <h3>{item.p_name}</h3>
        </div>
      </div>

    </div>
    </a>


   



    </>
  )
}
