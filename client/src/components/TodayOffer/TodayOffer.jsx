import React,{useState,useEffect} from 'react'
import Modal from "react-modal"

import today from '../../images/today-deal.png'

import './TodayOffer.css'

export default function TodayOffer() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
      setIsModalOpen(true);
    }, []);


  return (
    <>
        
      <Modal isOpen={isModalOpen}>
      <div className='modal-today'>
      <button className='close-modal' onClick={() => setIsModalOpen(false)}><i class="fa fa-xmark" aria-hidden="true"></i></button>
        <h2 className='text-center'>Today's Deal</h2>
         <div className="today-deal">
       

<div class="popupBox__img">
        <img src={today} alt="" />
      </div>
      <div class="popupBox__contentTwo">
        <div>
          <h3 class="popupBox__title">Great Offer</h3>
          <h2 class="popupBox__titleTwo">60 <sup>%</sup><span> Off</span></h2>
          <p class="popupBox__description">
            Get th benefit as soon as possible
          </p>
          <a  href="#" class="popupBox__btn">Get The Deal</a>
        </div>
        </div>
    </div>
    </div>
       
      </Modal>
    </>
  )
}
