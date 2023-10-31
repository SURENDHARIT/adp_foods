import React from 'react'
import Navbar from '../Navbar/Navbar'
import zippy from '../../images/zippy.png'
import zippy_logo from '../../images/zippy logo.png'
import './Homepage.css'
import Example from '../Carousel/Carousel'
import Food from '../Food/Food'
import Team from '../Team/Team'
import Footer from '../Footer/Footer'
import TodayOffer from '../TodayOffer/TodayOffer'

export default function Homepage() {
  return (
    <>
        <div className="front">
        <Navbar/>

        <TodayOffer/>

        <div className="zippy">
            <img src={zippy} alt="" />
        </div>

        <div className="zippy-logo">
            <img src={zippy_logo} alt="" />
        </div>

        <Example/>

        

        </div>

        <Food/> 
        <Team/>

        <Footer/>
        
    </>
  )
}
