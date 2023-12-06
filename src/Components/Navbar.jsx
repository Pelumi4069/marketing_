import React from 'react';
import { useState } from "react"; 
import Logo from '../assets/Logo.png';

const Navbar = () => {
{/* const [isOpen, setIsOpen] = useState(false); */}

  return (
    <div className="p-4 py-1 px-14 container mx-auto flex items-center justify-between">
      <a href='#'>
      <img src={Logo} alt="logo" />
      </a>

      <div className="flex align-start flex-col md:flex-row md:ml-auto md:mr-auto items-center text-base">
        <a className="mr-5 hover:text-accent cursor-pointer">Home</a>
        <a className='mr-5'>Service</a>
        <a className='mr-5 text-primary'>Case Studies</a>
        <a className='mr-5'>Blog</a>
      </div>


      <div className='flex align-start flex-row justify-between  '>
      <h2 className='px-8'>Login</h2>
      <button className='inline flex bg-black-600 border-0 py-1 px-5 mt-4 md:mt-0 bg-black text-white p-2 rounded'>Join Us</button>
      </div>

    </div>
  )
}
export default Navbar;
