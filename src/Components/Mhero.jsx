import React from 'react'
import Market from '../assets/illustration_marketing_market.svg';
import Play from '../assets/ic_play.svg';

const Mhero = () => {
  return (
    <div className='lg:h-[90vh] flex items-center lg:bg-cover lg:bg-center 
       lg:bg-no-repeat p-24 lg:py-0 overflow-hidden md:flex justify-between  '> 
      <div className='items-center'>
        <p className='text-primary font-bold '>DIGITAL MARKETING</p>
        <h1 className=' text-7xl py-4 font-bold md:pt-5 text-gray-900 
        md:text-start  leading-tight'>Boosts Your Website Traffic</h1>
        <h3 className='py-2 text-1.5xl text-gray-700 mt-5 md:w-96 md:text-start'>Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. </h3>
        <div className='py-3 flex flex-row justify-center mt-7 md:justify-start'>
          <button className='bg-primary text-white text-s md:text-base  py-2 px-5 rounded-md mr-7 cursor-pointer hover:bg-white  ' >Try For Free</button>
          <img src={Play} alt="" className='px-5 border-1-primary'/>
          <button className='px-3' >See Our Work</button>
        </div>
      </div>

      <div>
      <img src={Market} alt="hero_image" />
      </div>
      <div>

      </div>
    </div>
  )
}

export default Mhero;
