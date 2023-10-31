import React from 'react'
import Navbar from '../Navbar/Navbar'  
import zippy from '../../images/zippy.png'
import zippy_logo from '../../images/zippy logo.png' 
import Footer from '../Footer/Footer'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

import './Cart.css'
import { useNavigate } from 'react-router-dom'


export default function Cart() {


    const[pid,setPid] = useState([])

    const navigate = useNavigate()

    // const[pid,setPid] = useState([])

    const[product,setProducts] = useState([])
    const user = localStorage.getItem('user')

    const[data,setData] = useState(null)

    const [value,setValue] = useState([])

    // const [price,setPrice] = useState(0)

    var price = 0;

    // useEffect(()=>{
    //     const fetch = async()=>{
    //         await axios.get(`http://localhost:2882/cart/get/${user}`)
    //         .then((res) => {
    //           setValue(res.data);
    //         })
    //         .catch((err) => {
    //           console.error(err);
    //         });

    //     setPid(value.items.map(item => item.product))
    //     const products = [];

    //     for (const productId of pid) {
    //     const productResponse = await axios.get(`http://localhost:2882/products/get/${productId}`);
    //     products.push(productResponse.data);
    //     }

    //     console.log(products)
    //     setProducts(products)
    //     console.log(product.length,"length")
    //     }

       
    //         fetch()
      
    //     },[])








    useEffect(()=>{
        const fetch = async () => {
            try {
              const cartResponse = await axios.get(`http://localhost:2882/cart/get/${user}`);
              setValue(cartResponse.data);
          
              const productIds = cartResponse.data.items.map(item => item.product);
              const productsResponse = await Promise.all(
                productIds.map(productId => axios.get(`http://localhost:2882/products/get/${productId}`))
              );
              const products = productsResponse.map(response => response.data);
              setProducts(products);
              
            } catch (error) {
              console.error(error);
            }
          };

          fetch()
    },[]    )












    // useEffect(async()=>{
    //     await axios.get(`http://localhost:2882/cart/get/${user}`)
    //     .then(async(response)=>{
    //         // console.log(response.data.item)
    //         setData(response.data)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })


    //     // const productIds = data.items.map(item => item.productId);
    //     // const products = data.items;

    //     // console.log(data)

    //     // for (const productId of productIds) {
    //     // const productResponse = await axios.get(`http://localhost:2882/products/get/${productId}`);
    //     // // console.log(productResponse)
    //     // products.push(productResponse.data);
    //     // }

    //     // console.log(products)
         



    //     // Update the state with the fetched product data
    //     // setProducts(products);
    //     // console.log(product)




    //     },[])


  return (
    <>
        <Navbar/>
        <div className="zippy">
            <img src={zippy} alt="" />
        </div>

        <div className="zippy-logo">
            <img src={zippy_logo} alt="" />
        </div>

        <h2 className='product-type mb-5' >Shopping Cart</h2>


      
        <table className='table table-hover table-secondary my-cart-table'>
           <thead>
           <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Remove</th>
            </tr>
           </thead>
           <tbody>
            {
                
                product.length>0?(
                    <>
                    {
                        product.map((item)=>{
                            return(
                              <>
                                <tr>
                                    <td>
                                        {item.p_name}
                                    </td>
                                    <td>
                                      <p style={{display:'none'}}>
                                      {
                                        price+=item.price
                                      }
                                      </p>
                                        {
                                        item.price
                                        }
                                    </td>
                                    <td>
                                    {
                                        <button onClick={
                                            ()=>{
                                                console.log("sdf",item._id,"sdf")
                                                axios.delete(`http://localhost:2882/cart/delete/${user}/products/${item._id}`)
                                                .then((data)=>{
                                                    navigate('/')
                                                })
                                            }
                                        }>
                                            Remove
                                        </button>
                                    }
                                  </td>
                                    
                                </tr>
                              </>
                            )
                        })
                    }
                    </>
                ):
                (
                    
                            <>
                              <tr>
                                  <td colSpan={3} style={{padding:'30px'}}>
                                      <h3>
                                      No products available
                                      </h3>
                                  </td>
                              </tr>
                            </>
                    
                    
                )

            }

            <tr>
              <td colSpan={2} style={{backgroundColor:'grey'}}>
                Total:
              </td>
              <td style={{backgroundColor:'grey'}}>
              ₹ {price}
              </td>
            </tr>
            </tbody>

        </table>

            <button className="bg-warning mt-4">
              Checkout
            </button>

    <Footer/>
    </>
  )


}
