import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';

import round from '../../images/round.png'

import './Product.css'

import veg from '../../images/veg-icon.png'
import nv from '../../images/nv-veg-icon.png'

export default function Product() {

    const id = useParams().id;
    const navigate = useNavigate()
    console.log(id)
    const [data,setData] = useState([])
    const [user,setUser] = useState([])

    useEffect(()=>{
      setUser(localStorage.getItem('isLoggedIn'))

        axios.get(`http://localhost:2882/products/get/${id}`)
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
                   Quantity : {data.quantity}
                </div>
                <div className="nop">
                Number of pieces: {data.nop}
                </div>

                <div className="recipe-ingredients">
                    <button type="button" class="recipe-btn btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Ingredients
                    </button>

                    <button type="button" class="recipe-btn btn btn-warning" data-bs-toggle="modal" data-bs-target="#recipeModal">
                    Recipe
                    </button>
                </div>

                {
                  user?(
                    <>
                       <button className='button-cart' style={{background:'transparent'}} onClick={()=>{
                    const id = localStorage.getItem('user')
                    axios.post(`http://localhost:2882/cart/add/${id}`,{
                        productId:data._id,
                        quantity:1
                    })
                    .then((data)=>{
                        console.log("add to cart")
                        navigate('/cart')
                    })
                    .catch((err)=>{
                        console.log("Error in cart" ,err)
                    })
                }}>
                <span> </span><i class="fa-solid fa-cart-plus text-secondary w-100"></i>
                </button>

                    </>
                  ):
                  (
                    <></>
                  )
                }

            </div>
        </div>


<div class="modal fade" id="recipeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header ">
        
        {/* <button type="button" class="btn-close close-btn m-0" data-bs-dismiss="modal" aria-label="Close"></button> */}
      </div>
      <div class="modal-body">
      <h3 class="modal-title m-auto mb-4" id="exampleModalLabel">Recipe</h3>
        
          <img src={round} className='round-img' alt="" />
      <ul>
              {
               data.recipe!=null?(
                    data.recipe.map((ing,i)=>{
                        return(
                            <>
                            {
                                ing!='' ?(<>
                                <li className='mt-3'><span className='steps'>Step {i+1} :</span> <span className='recipe-ing'>{ing}</span></li>
                                </>):(<></>)
                            }               
            
                            </>
                          )
                      })
                ):
                (
                    <>
                           <li>{data.recipe}</li>
                          </>
                )
              }
            </ul>



      </div>
      {/* <div class="modal-footer">
        <span type="button" class="" data-bs-dismiss="modal">X</span>
      </div> */}
    </div>
  </div>
</div>



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        {/* <button type="button" class="btn-close close-btn" data-bs-dismiss="modal" aria-label="Close"></button> */}
      </div>
      <div class="modal-body">
      <h3 class="modal-title m-auto mb-5" id="exampleModalLabel">Ingredients</h3>
        
        <img src={round} className='round-img' alt="" />

      <ul>
              {
                data.ingredients!=null?(
                    data.ingredients.map((ing)=>{
                        return(
                          <>
                            {
                                ing!='' ?(<>
                                <li className='mt-3'><span className='recipe-ing'>{ing}</span></li>
                                </>):(<></>)
                            }    
                          </>
                        )
                      })
                ):
                (
                    <>
                           <li>{data.ingredients}</li>
                          </>
                )
              }
            </ul>



      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
      </div>
    </div>
  </div>
</div>

    </div>

  )
}
