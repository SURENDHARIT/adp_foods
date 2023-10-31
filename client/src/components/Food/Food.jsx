import React from 'react'
import adp from '../../images/adp-blue.png'

import veg from '../../images/veg-pan.png'
import nv from '../../images/nv-pan.png'

import advantage from '../../images/advantage.png'

import {Link} from 'react-router-dom'


import './Food.css'

export default function Food() {
  return (
    <>
        <div className='adv-nv'>
            <br /><br /><br /><br /><br />
            <div className='adv'>
                <div className="card-choose">
                    <img src={advantage} alt="" />
                </div>
            </div>
            <div className='veg-nv'>

                <div className='stick-card'>
                    <Link to="/veg">
                    <img src={veg} alt="" />
                    </Link>
                </div>
                <div className='stick-card'>
                    <Link to="/nv">
                    <img src={nv} alt="" />
                    </Link>
                </div>

            </div>
        </div>
    </>
  )
}
