import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import About from './Components/About';

import Home from './Pages/Home';
import OrderNow from './Pages/Order_now';
// import Addtocart from './Pages/Addtocart';
import OrderConfirmation from './Pages/OrderConfirmation';

function App() {
  return (
    <>
    <BrowserRouter>
      {/* <Home/> */}
      {/* <Order_now/> */}
       <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Home' element={<Home />} />
        <Route exact path='/Order_now' element={<OrderNow />} />
        {/* <Route exact path='/Addtocart' element={<Addtocart />} /> */}
        <Route exact path="/OrderConfirmation" element={<OrderConfirmation />}  />

       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
