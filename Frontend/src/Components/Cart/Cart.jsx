import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Cart.css";
import { MdDeleteForever } from "react-icons/md";
import logo from '../Cart/recycle.png';
import { useNavigate } from 'react-router-dom'; 

const Cart = ({ cart, setCart }) => {
  const [items, setItems] = useState(cart);
  const navigate = useNavigate();

  useEffect(() => {
    setItems(cart);
  }, [cart]);

  const handleQuantityChange = (itemId, event) => {
    const newQuantity = parseInt(event.target.value || 0);
    const updatedItems = items.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setItems(updatedItems);
    setCart(updatedItems);
  };

  const calculateTotalPrice = (price, quantity) => {
    return price * quantity;
  };

  const calculateCartTotal = () => {
    return items.reduce((total, item) => total + calculateTotalPrice(item.price, item.quantity || 0), 0);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  const handlePayment = async () => {
    const amount = calculateCartTotal() + 100; 
    if (amount <= 100) {
      alert('The cart is empty or amount is invalid');
      return;
    }
    try {
    
      // alert('inside try 1');
      const { data } = await axios.post('http://localhost:5000/create-order', { amount });
      // alert('inside try 2');
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: 'SustainX',
        image: logo, 
        description: 'Test Transaction',
        order_id: data.id,
        handler: (response) => {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          // alert(`Order ID: ${response.razorpay_order_id}`);
          // alert(`Razorpay Signature: ${response.razorpay_signature}`);
        
          navigate('/OrderConfirmation', { state: { items, totalAmount: amount } });

        },
        prefill: {
          name: 'Nayan Raut',
          email: 'customer@example.com',
          contact: '1234567890',
        },
        theme: {
          color: '#F37254',
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Payment error', error);
      alert('Something went wrong during the payment process');
    }
  };

  return (
    <div className='cart'>
      <div className='cart-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      {items.map((item) => (
        <div key={item.id} className='cart-format'>
          <div className='cart-img'>
            <img src={item.img} alt={item.itemName} className="image" />
          </div>
          <p className='grid' style={{ paddingTop: '20px' }}>{item.itemName} </p>
          <p className='grid' style={{ paddingTop: '20px' }}>{item.price} /{item.tag}</p>
          <div className="grid">
            <input
              placeholder='Enter Qty'
              type="number"
              className='form-control pt-2'
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e)}
              style={{ width: '100px', fontSize: '13px', height: '35px' }}
            />
          </div>
          <span className="grid" style={{ paddingTop: '20px' }}>
            Total: {calculateTotalPrice(item.price, item.quantity || 0)}
          </span>

          <div className='grid' style={{ paddingTop: '20px' }}>
            <MdDeleteForever onClick={() => handleRemove(item.id)} className='cart-remove-icon' />
          </div>
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
      ))}

      <div className='cart-down'>
        <div className='cart-total'>
          <h4> Cart Total</h4>
          <div>
            <div className='cart-total-item'>
              <p>Subtotal</p>
              <p>{calculateCartTotal()} Rs</p>
            </div>
            <hr />
            <div className='cart-total-item'>
              <p>Shipping Fee</p>
              <p>{100} Rs</p>
            </div>
            <hr />
            <div className='cart-total-item'>
              <h4>Total</h4>
              <h4>{calculateCartTotal() + 100} Rs</h4>
            </div>
          </div>
          <button onClick={handlePayment}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
