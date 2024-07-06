//import { Link } from "react-router-dom";
import {  Link } from 'react-router-dom';
import React from 'react';
//import  { SVGProps } from 'react';

/* export function UilPlus(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2"></path></svg>);
}
 */

import MenuComponent from './menu';
window.addEventListener('scroll', ()=>{
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);

});




  
  function HeaderSection(){
  



    return (
        <div  >
        <nav className='fixed top-0 left-0 w-full z-10 bg-headerColor h-10 py-5'>
        <MenuComponent />

        </nav>

        


    </div>
  );
      
  }

  export default HeaderSection;