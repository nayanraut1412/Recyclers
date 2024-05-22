import React from 'react'
import './Body1.css';
import delivery from '../../assets/delivery.png';
import do_payment from '../../assets/do_payment.png';
import economy from '../../assets/economy.png';
import place_order from '../../assets/place_order.png';

const Body1 = () => {
  return (
     <>
     <div className='title'>
          <h2>How it Works</h2>
     </div>
     
    <div className='body'>
        <div className='body1'>
             <img src={place_order} alt='place_order' />
        </div>
        <div className='body1'>
             <img src={do_payment} alt='do_payment' />
        </div>
        <div className='body1'>
             <img src={delivery} alt='delivery' />
        </div>
        <div className='body1'>
             <img src={economy} alt='economy' />
        </div>
    </div>
    </>
  )
}

export default Body1;