import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Order from '../Components/Order/Order'
// import Footer from '../Components/Footer/Footer'
import Cart from '../Components/Cart/Cart'
// import { Warning } from '@mui/icons-material'
// import Addtocart from './Addtocart'

import '../Components/Order/Order.css'

const Order_now = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
      // console.log(item);
      let isPresent = false;
      cart.forEach((product)=>{
        if(item.id===product.id)
          isPresent = true;
      })
      if(isPresent){
        setWarning(true);
        setTimeout(()=>{
          setWarning(false);
        },5000);
        return;
      }
        
      setCart([...cart, item]);
      
  }

  return (
   <>
    <Navbar size={cart.length} setShow={setShow}/>
    {
      show ? <Order handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart}/>
    }
    
    {

        warning && <div class="alert alert-danger" role="alert">  Item is already added to your cart</div>

      }

    {/* <div className='container'>
      <Footer/>
    </div> */}
   </>
  )
}

export default Order_now