import React,{useEffect,useState} from 'react'
import adp from '../../images/adp.png'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

import './Navbar.css'

export default function Navbar() {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const [isLoggedIn,setIsLoggedIn] = useState()
    // console.log(cookies.jwt);
    console.log(localStorage.getItem("token"))


  useEffect(()=>{
    setIsLoggedIn(localStorage.getItem('isLoggedIn'));
    console.log(isLoggedIn)
  },[])


    //  useEffect(() => {
    //     const verifyUser = async () => {
    //         setCook(localStorage.getItem("token"))
    //       if (!cookies.jwt) {
    //         // navigate("/login");
    //       } else {
    //         const { data } = await axios.post(
    //           "http://localhost:2882/auth/",
    //           {},
    //           {
    //             withCredentials: true,
    //           } 
    //         );
    //         if (!data.status) {
    //           removeCookie("jwt");
    //           navigate("/");
    //         } else
    //           toast(`Hi ${data.user} `, {
    //             theme: "dark",
    //           });
    //       }
    //     };
    //     verifyUser();
    //   }, [cookies, navigate, removeCookie]);

      const logOut = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('isLoggedIn'); 
        navigate('/login')
        console.log("first")
      }
     

  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                {/* <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Today's Offer</a>
                </li> */}
                <li class="nav-item">
                <a class="nav-link" href="/products">Products</a>
                </li>

                <li class="nav-item">
                <a class="nav-link" href="/about">About US</a>
                </li>
                <li class="nav-item">
                <a class="navbar-brand" href="/">
                    <img src={adp} alt="" />
                </a>
                </li>
                {/* <li class="nav-item">
                <a class="nav-link" href="#">People</a>
                </li> */}

                {
                    isLoggedIn?(<li class="nav-item">
                    <a class="nav-link" href="/cart">My Cart</a>
                    </li>):(<></>)
                }

                
                <li class="nav-item">
                <a class="nav-link" href="#">

                {
                    isLoggedIn?(<button onClick={logOut}>Log out</button>):(<Link style={{color:'#E5AC15'}} className='login' to="/login">Login</Link>)
                }

                    

                </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        <ToastContainer />
    </>
  )
}
