import React from 'react'
import adp from '../../images/adp-white.png'

import adp_gaudam from '../../images/gaudam.png'
import adp_d from '../../images/adp_d.png'
import adp_p from '../../images/adp_p.png'

import './Team.css'
import TeamCard from '../Team Card/TeamCard'

export default function Team() {
  return (
    <>
        <div className='team'>
            <h2>TEAM</h2>
            <div className="adp-logo">
                <img src={adp} alt="" />
            </div>
            <div className="team-members">
                <div className="team-group">
                <div className='team-mask '> 
                    <img src={adp_gaudam} alt="" />
                </div>
                <div className='team-mask'> 
                    <img src={adp_d} alt="" />
                </div>
                <div className='team-mask'> 
                    <img src={adp_p} alt="" />
                </div>
                </div>
                
                <div className="team-group">
                    <TeamCard/>
                    <TeamCard/>
                    <TeamCard/>
                    <TeamCard/>
                    <TeamCard/>
                </div>

            </div>
        </div>
    </>
  )
}
