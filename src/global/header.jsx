//import { Link } from "react-router-dom";
import {  Link } from 'react-router-dom';


  
  function HeaderSection(){
    return (
        <div  className='bg-headerColor'>
      <nav>
        <ul className='flex justify-end mr-10 p-2'>
          <li className='mr-4 text-lg text-whiteColor'><Link to="/">Home</Link></li>
          <li className='mr-4 text-lg text-whiteColor'><Link to="/about">About</Link></li>
          <li className='mr-4 text-lg text-whiteColor'><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

    </div>
  );
      
  }

  export default HeaderSection;