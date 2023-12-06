import React from 'react';
import OPTIM from "../assets/optim.png";
import PLANNING from "../assets/planning.png";
import RESCH from "../assets/research.png";
import RESULT from '../assets/result.png';
import ICON from '../assets/iconbase.svg';

 const Workflow = () => {
  return (
    <div className='lg:h-[95vh] flex items-center lg:bg-cover lg:bg-center 
    lg:bg-no-repeat p-24 lg:py-0 overflow-hidden md:flex justify-between'>
        <div className='flex flex-col'>
            <div className='py-10 bg-gray-50 shadow-lg rounded-xl '>
                <p className='text-xs mt-2 text-gray-500 '>WORKFLOW</p>
                <h1 className='text-4xl mt-2 block  font-bold leading tight text-gray-800'>Working Process</h1>
                <p className='mt-2 text-gray-500'>Nunc nonummy metus. Donec elit libero, sodales nec, <br /> volutpat a, suscipit non, turpis.</p>
            </div>

            <div className='flex flex-row items-center'>
               <div className='p-8 items-center text-center w-25'>
                <img  src={PLANNING} alt="icons"className='h-11 my-6 justify-center '/>
                <h3 className='mt-1 block text-lg font-bold leading-tight text-gray-800 py-4'>SEO</h3>
                <img src={ICON} alt="icon" />
               </div>

               <div className='p-8 items-center text-center w-25 items-center'>
                <img src={RESCH} alt="icons" className='h-11 my-6 items-center' />
                <h3 className='mt-1 block text-lg font-bold leading-tight text-gray-800 py-4'>Email Marketing</h3>
                <img src={ICON} alt="icon" className='align-center items-center'/>
               </div>

               <div className='p-8 items-center text-center w-25'>
                <img src={OPTIM} alt="icons" className='h-11 my-6' />
                <h3 className='mt-1 block text-lg font-bold leading-tight text-gray-800 py-4'>Search Engine Oprimization</h3>
                <img src={ICON} alt="icon" />
               </div>

               <div className='p-8 items-center text-center w-25'>
                <img src={RESULT} alt="icons" className='h-11 my-6' />
                <h3 className='mt-1 block text-lg font-bold leading-tight text-gray-800 py-4'> Social Marketing</h3>
                <img src={ICON} alt="icon" />
               </div>
            </div>
        </div>
    </div>
  )
}

export default Workflow;
