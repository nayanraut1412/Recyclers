// Navbar.jsx
import React,{ useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'

import { FaCartPlus } from "react-icons/fa";

 import './Navbar.css'

const Navbar = ({size, setShow}) => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

  }
  return (
    <nav className='cont dark-nav'>
      <img src={logo} alt='logo' className='logo'/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
      {/* smooth={true} offset={200} duration={500} */}
        <li><NavLink to='/' className={(e)=>{return e.isActive?"label-select": ""}} >Home</NavLink> </li>
        <li>Price Now</li>
        <li><NavLink to='/Order_now'   className={(e)=>{return e.isActive?"label-select": ""}} onClick={()=> setShow(true)}>Order Now</NavLink> </li>
        <li>About Us</li>
        <li>
          <NavLink className ={(e)=>{return e.isActive?"label-select": ""}} onClick={()=> setShow(false)}>
          <FaCartPlus className='cart-trolley'/>
          <span className='cart-total--item' >{size}</span> 
          </NavLink>
        </li>
      </ul>
      <img src={menu} alt='menu icon' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
}

export default Navbar;


// function bg(){
//   return (
//     <div className='bg'>

//     </div>
//   );
// }
// export {bg};

