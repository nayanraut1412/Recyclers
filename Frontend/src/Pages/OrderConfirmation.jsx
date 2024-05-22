import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer';
// import Cart from '../Components/Cart/Cart'
import Orderconfirmation from '../Components/OrderConfirm/order-confirmation';

const OrderConfirmation = () => {
    // const [show, setShow] = useState(true);
    // // const [cart, setCart] = useState([]);

    // const handleClick = (item) => {
    //     console.log(item);
    // }
  return (
    <>
    <Navbar/>
    <Orderconfirmation/>
    <Footer/>
        
    </>
  )
}

export default OrderConfirmation;