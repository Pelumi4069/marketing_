import React from 'react';
import Icon from '../assets/iconbase.svg';

const About = () => {
  return (
    <div className='lg:h-[60vh] flex items-center lg:bg-cover lg:bg-center 
    lg:bg-no-repeat p-24 lg:py-0 overflow-hidden md:flex justify-between'>
        <div className='flex flex-row items-center'>
            <div className='basis-2/5 text-end'>
                <p className='text-end text-xs text-gray-400'>ABOUT US</p>
                <h1 className='text-black-900 py-3 font-bold text-4xl'>Who We Are</h1>
                <p className='py-3 text-gray-500'>In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                <div className='flex flex-row text-end py-3'> 
                     <p className='text-end text-primary text-end text-sm'>Learn more</p> 
                     <img src={Icon} alt="icon" className='px-2'  />
                </div>
            </div>
            <div className='basis-1/5 text-center'>
                <h1 className='text-black-900 py-3 font-bold text-4xl' >150</h1>
                <h1 className='text-black-900 py-3 font-bold text-4xl' >32k</h1>
                <h1 className='text-black-900 py-3 font-bold text-4xl' >20</h1>
            </div>
            <div className='basis-2/5 '>
                <p className='text-sm py-5 text-gray-600'>Praesent turpis. Praesent blandit laoreet nibh. Nunc  augue ac venenatis nonummy metus.</p>
                <p className='text-sm py-5 text-gray-600'>Praesent blandit laoreet nibh. Suspendisse pulvinar, augue ac venenatis condimentum.</p>
                <p className='text-sm py-5 text-gray-600'>Praesent blandit laoreet nibh. Suspendisse pulvinar, augue ac venenatis condimentum.</p>
            </div>
        </div>
    </div>
  )
}

export default About;
