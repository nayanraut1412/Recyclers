import React from 'react';
import { useLocation } from 'react-router-dom';

import './order-confirmation.css';
const Orderconfirmation = () => {
  const location = useLocation();
  const { items, totalAmount } = location.state;

  
  const calculateTotalPrice = (price, quantity) => {
    // console.log(price*quantity);

    return price * quantity;
  };

  return (
    <div className="order-confirmation">
      <h2>Order Confirmation</h2>
      <p>Thank you for your purchase!</p>
      <h3>Order Details:</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.itemName} - {item.quantity} x {item.price} Rs = {calculateTotalPrice(item.price, item.quantity || 0)} Rs
          </li>
          
        ))}
      </ul>
      <p>Shipping Charge : 100 Rs</p>
      <h3>Total Amount: {totalAmount} Rs</h3>
    </div>
  );
};

export default Orderconfirmation;
