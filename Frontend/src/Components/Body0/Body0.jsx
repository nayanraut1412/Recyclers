import React from 'react'

import './Body0.css';
import recycle from '../../assets/recycle.png';

const Body0 = () => {

  return (
    <div  className='body0' id='Home'>
        <div className='body0-text'>
            <h1>"Empower Change:
            Be a Recycler and Make 
            a Difference Today!"</h1>
            <p>Close the loop and contribute to a circular economy.</p>
            <button className='btnn'>Order Now</button>
            {/* <button type="button" class="btn btn-primary btn-lg">Large button</button> */}      
        </div>
        <div className='body0-img'>
          <img src={recycle} alt='recycle'/>
         </div>
    </div>
  )
}

export default Body0;


