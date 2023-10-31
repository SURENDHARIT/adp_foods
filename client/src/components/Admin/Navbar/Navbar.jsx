import React,{useEffect,useState} from 'react'
import adp from '../../../images/adp.png'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";


import './Navbar.css'

export default function Navbar() {
    const navigate = useNavigate();

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
                <a class="nav-link" href="/admin/products">Products</a>
                </li>
                {/* <li class="nav-item">
                <a class="nav-link" href="#">How to Cook</a>
                </li> */}
                <li class="nav-item">
                <a class="navbar-brand" href="/">
                    <img src={adp} alt="" />
                </a>
                </li>

                <li class="nav-item">
                <a class="nav-link" href="/admin/products">Products</a>
                </li>
                
                {/* <li class="nav-item">
                <a class="nav-link" href="#">People</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Infrastructure</a>
                </li> */}
                <li class="nav-item">
                <a class="nav-link" href="#">

                {
                    // cook?(<button onClick={logOut()}>Log out</button>):(<Link to="/login">Login</Link>)
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
