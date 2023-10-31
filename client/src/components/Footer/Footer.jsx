import React from 'react'
import './Footer.css'

import zippy_logo from '../../images/zippy logo.png'
import fb from '../../images/fb.png'
import linked from '../../images/linkedIn.png'
import insta from '../../images/insta.png'
import gmail from '../../images/gmail.png'



export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
        <div className="social-media">
            <div className="zippy-footer-logo">
                <img src={zippy_logo} alt="" />
            </div>
            <div className="social-media-links">
                <a href="https://www.instagram.com/">
                    <div className="logo-sm">
                        <img src={insta} alt="" />
                    </div>
                </a>
                <a href="https://www.linkedin.com/company/adpfoods/">
                    <div className="logo-sm">
                        <img src={linked} alt="" />
                    </div>
                </a>
                
                <a href="https://www.facebook.com/adpprocessedfoods/">
                    <div className="logo-sm">
                        <img src={fb} alt="" />
                    </div>
                </a>
                
                <a href="mailto:writeus@adpfoods.com">
                    <div className="logo-sm">
                        <img src={gmail} alt="" />
                    </div>
                </a>
            </div>
        </div>

        <div className="about-contact">
            <a href="/about"><h5>
                About</h5></a>

            <div>
                <h5>Contact Us</h5>
                <p>
                ADP PROCESSED FOODS
                </p>

                <p>
                Address: SF No: 99/1 Attur, village, Hosur, Tamil Nadu 635105 

                </p>

                <p>
                <a href="mailto:writeus@adpfoods.com">writeus@adpfoods.com </a>
                </p>

                <p>
                    Toll Free - <a href="tel:8100 572 5820">8100 572 5820</a>

                </p>
               
            </div>
        </div>

        <div className="">
    
        </div>
        </div>

        <hr className='hr-line' />

        <div className="footer-bottom">
            <h6>Copyrights@2023 ADPPROCESSEDFOOD</h6>
            <h6>All Rights Reserved</h6>
        </div>
    </div>
  )
}
