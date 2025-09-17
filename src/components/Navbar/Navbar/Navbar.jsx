import React, { useState } from 'react'
import './Navbar.css'
import { assets } from "../../../assets/assets";
import { Link } from 'react-router-dom';

export const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("Home");

  return (
    <div className='navbar'>
     {/* <Link to='/'> <img src={assets.logo} alt="Logo" className='logo' /></Link> */}
      <img src={assets.logo} alt="Logo" className='logo' />
      <ul className='navbar-menu'>
        <Link to='/' className={menu === "Home" ? "active" : ""} onClick={() => setMenu("Home")}>Home</Link>
        <a href="#explore-menu"className={menu === "Menu" ? "active" : ""} onClick={() => setMenu("Menu")}>Menu</a>
        <a href="#app-download"className={menu === "Mobile App" ? "active" : ""} onClick={() => setMenu("Mobile App")}>Mobile App</a>
        <a href="#app-download"className={menu === "Contact Us" ? "active" : ""} onClick={() => setMenu("Contact Us")}>Contact Us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="Search" />
        <div className='navbar-search-icon'>
          {/* <Link to='/cart'> */}
          <img src={assets.basket_icon} alt="Basket" />
            {/* </Link> */}
          <div className='dot'></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}