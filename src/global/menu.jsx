import React, { useState } from 'react';
import {  Link } from 'react-router-dom';
import { controlMenu } from './controlPage';
//let pageVisibile = false

const MenuComponent = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isSelectedHome, setSelectedHome] = useState(true);
  const [isSelectedAbout, setSelectedAbout] = useState(false);
  const [isSelectedContact, setSelectedContact] = useState(false);
  const navMenu = document.querySelector(".nav_menu")
  const openMenuBUtton = document.querySelector("#open-menu-btn")
  const closeMenuButton = document.querySelector("#close-menu-btn")

  const handleMenuOpen = () => {
    setMenuVisible(true);
    const navMenu = document.querySelector(".nav_menu").style.display = "inline-block"
    const openMenuBUtton = document.querySelector("#open-menu-btn").style.display = "none"
    const closeMenuButton = document.querySelector("#close-menu-btn").style.display = "inline-block"
    /* style={{ display: isMenuVisible ? 'none' : 'inline-block' }} */
  };

  const handleMenuClose = () => {
    setMenuVisible(false);
    navMenu.style.display = "none"
    closeMenuButton.style.display = "none"
    openMenuBUtton.style.display = "inline-block"
    

    /* style={{display: isMenuVisible ? 'inline-block' : 'none'}} */
    
  };

  const handleClickAbout =()=>{
    //console.log("MenuClicked!")
    setSelectedAbout(true);
    setSelectedHome(false);
    setSelectedContact(false);

    
    navMenu.style.display = "none"
    closeMenuButton.style.display = "none"
    openMenuBUtton.style.display = "inline-block"
  
    
}

const handleClickHome =()=>{
  //console.log("MenuClicked!")
  setSelectedHome(true);
  setSelectedAbout(false);
  setSelectedContact(false);

  
  navMenu.style.display = "none"
  closeMenuButton.style.display = "none"
  openMenuBUtton.style.display = "inline-block"

  
}

const handleClickContact = ()=>{
  setSelectedContact(true);
  setSelectedAbout(false);
    setSelectedHome(false);
  
    navMenu.style.display = "none"
    closeMenuButton.style.display = "none"
  openMenuBUtton.style.display = "inline-block"

  

}

  

  

  return (
    <div>
        <div className="container nav_container" >
        <a href="index.html" className='text-white font-bold font-serif'><h4>PCAE</h4></a>
        <ul className='nav_menu'>
          <li className='mr-4 text-lg text-whiteColor menu_link' onClick={handleClickHome}><Link to="/">Home</Link></li>
          <li className='mr-4 text-lg text-whiteColor' onClick={handleClickAbout}><Link to="/about">About</Link></li>
          <li className='mr-4 text-lg text-whiteColor' onClick={handleClickContact}><Link to="/contact">Contact</Link></li>
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
