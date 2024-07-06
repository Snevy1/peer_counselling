import React, { useState } from 'react';
import {  Link } from 'react-router-dom';

const MenuComponent = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleMenuOpen = () => {
    setMenuVisible(true);
    document.querySelector(".nav_menu").style.display = "inline-block"
    document.querySelector("#open-menu-btn").style.display = "none"
    document.querySelector("#close-menu-btn").style.display = "inline-block"
    /* style={{ display: isMenuVisible ? 'none' : 'inline-block' }} */
  };

  const handleMenuClose = () => {
    setMenuVisible(false);
    document.querySelector(".nav_menu").style.display = "none"
    document.querySelector("#close-menu-btn").style.display = "none"
    document.querySelector("#open-menu-btn").style.display = "inline-block"
    

    /* style={{display: isMenuVisible ? 'inline-block' : 'none'}} */
    
  };

  return (
    <div>
        <div className="container nav_container" >
        <a href="index.html" className='text-white font-bold font-serif'><h4>PCAE</h4></a>
        <ul className='nav_menu'>
          <li className='mr-4 text-lg text-whiteColor'><Link to="/">Home</Link></li>
          <li className='mr-4 text-lg text-whiteColor'><Link to="/about">About</Link></li>
          <li className='mr-4 text-lg text-whiteColor'><Link to="/contact">Contact</Link></li>
        </ul>
        <button
        id="open-menu-btn"
        onClick={handleMenuOpen}
        
        className='nav_btn'
        
      >
        <i className="uil-uil-bars">Menu</i>
      </button>

      
        <button
          id="close-menu-btn"
          onClick={handleMenuClose}
          
          
          className='nav_btn'
          
        >
          <i className="uil-uil-multiply"></i>
        </button>
      

    </div>



    </div>
    
  );
};

export default MenuComponent;
