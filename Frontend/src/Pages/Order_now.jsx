import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Order from '../Components/Order/Order';
import Cart from '../Components/Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '../Components/Order/Order.css';

const Order_now = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  // const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    });
    if (isPresent) {
      // setWarning(true);
      toast.error("Item is already added to your cart", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // setTimeout(() => {
      //   setWarning(false);
      // }, 5000);
      return;
    }

    setCart([...cart, item]);
  }

  return (
    <>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? <Order handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} />}
      <ToastContainer style={{ paddingTop:'50px'}} />
    </>
  );
}

export default Order_now;
