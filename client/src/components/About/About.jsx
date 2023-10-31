import React from 'react'
import Navbar from '../Navbar/Navbar'
import './About.css'

export default function About() {
  return (

    <>
    <Navbar/>
    <div className="front about-front">
        <h2 ><span>About US</span></h2>

        <div className="about-content">
            <p>
            Our journey at ADP Processed Foods began in 2014 when the KG Brothers decided to start a business with the intent to produce quality meat products that are healthy and flavorful, fulfilling customer needs, and creating a delightful occasion. The first stage of the business was started in SIDCO Hosur, with an investment of 30 lakhs and only two employees. Through the years, our business expanded in terms of production levels and customers. Throughout this journey, we were faced with many challenges, but knowledgeable guidance and support from our friends in the industry, our ability to come up with innovative solutions, and persistent efforts by our full team, helped us grow. Our positive attitude along with the customer satisfaction that we have achieved, enabled the company to have 50 percent growth every year. By 2017 we had reached the full production capacity.
            </p>
            <p>
            It was then, we decided to set up a new plant of our own with a higher production capacity. The new facility was built with high end imported machinery and commenced production in 2019. At the new facility we have introduced a wide range of products even in the Veg and Egg sectors, to cater to the growing needs of our customer base.
            </p>
        </div>
    </div>
    </>
  )
}
