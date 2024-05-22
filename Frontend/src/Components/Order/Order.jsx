import React, { useState } from 'react';
import './Order.css';
import Odata from './Odata';

const Order = ({handleClick}) => {
  const [items, setItems] = useState(Odata);
  const [searchQuery, setSearchQuery] = useState('');

  const keys = ["category", "itemName", "tag"];

  const Search = () => {
    if (!searchQuery) {
      setItems(Odata);
    } else {
      const filteredItems = Odata.filter((item) =>
       keys.some((key) => item[key].toLowerCase().includes(searchQuery.toLowerCase())
      ));
      setItems(filteredItems);
    }
  };
  
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
    
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    Search();
  };

  const filterItem =(category)=>{
    const updatedItems = Odata.filter((curElem) =>{
      return curElem.category === category;
    });
    setItems(updatedItems);
  }

  const handleQuantityChange = (itemId, event) => {
    const updatedItems = items.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: event.target.value };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const calculateTotalPrice = (price, quantity) => {
    // console.log(price*quantity);

    return price * quantity;
  };

  return (
    <>
      <div className="search-container">
    
      <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search . . ."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button type="submit" className="btn-search"  style={{ marginLeft: '8px' }}>Search</button>
        </form>
      </div>

      <div className="menu-tabs container pt-5">
        <div className="menu-tab justify-content-around">
        <button className="btn btn-warning"  onClick={() => setItems(Odata)}>All Items</button>
          <button className="btn btn-warning" onClick={() => filterItem('Normal_Recyclables')}>Normal Recyclables</button>
          <button className="btn btn-warning" onClick={() => filterItem('Small_Appliances')}>Small Appliances</button>
          <button className="btn btn-warning" onClick={() => filterItem('Large_Appliances')}>Large Appliances</button>
          <button className="btn btn-warning" onClick={() => filterItem('Mobiles_Appliances')}>Mobile Appliances</button>
          <button className="btn btn-warning" onClick={() => filterItem('Other_Appliances')}>Other Appliances</button>
        </div>
      </div>

      <div className="menu-items container-fluid mt-3">
        <div className="row mx-auto">
          <div className="col-11 mx-auto">
            <div className="row my-auto">
              {items.map((item) => (
                <div key={item.id} className="item1 col-12 col-md-5 col-lg-6 col-xl-4 my-3">
                  <div className="card shadow">
                    <div className="row Item-inside p-2 ">
                      <div className="col-11 col-md-11 col-lg-4 img-div">
                        <img src={item.img} alt={item.itemName}  className="img-fluid" />
                        
                      </div>

                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="card-body">
                          <div className="p-2">
                            <h1  style={{ fontSize:'20px' }} >{item.itemName}</h1> 
                            <h2 style={{ fontSize:'15px', fontWeight:'500' }}>Price: {item.price}/{item.tag}</h2>         
                          </div>
                          <div className="manu-price-book">
                            <div className="price-book-divide d-flex justify-content-between">
                            <div className="quantity-input-container">
                                <input
                                placeholder='Enter Qty'                         
                                  type="number"
                                  className="form-control quantity-input pt-2"
                                  value={item.quantity || ''}
                                  onChange={(e) => handleQuantityChange(item.id, e)}
                                  style={{ width: '90px', fontSize:'10px' }} 
                                />
                                <span className="total-price">Total: {calculateTotalPrice(item.price, item.quantity || 0)}</span>
                              </div>   
                               <span>
                                <button className="btn-add" onClick={()=> handleClick(item)}>Add to Cart</button>
                                </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
