import React from 'react'

const Aboutus = () => {
  return (
    <div>
        <div className='w-fit md:w-full h-screen bg-[#829077] text-white md:px-12 md:py-12 lg:px-20 lg:py-15 flex flex-col justify-between font-montserrat px-4 py-6 md:gap-8 gap-1'>
            <h1 className='text-[20px] md:text-[26px] lg:text-[44px] font-bold md:w-[100%] lg:w-[98%] md:text-base/[38px] lg:text-base/[55px]'>Studio Arcé creates interiors that blend beauty, function, and personality. From concept to completion, we craft timeless spaces — combining artistry, craftsmanship, and a deep understanding of your lifestyle.</h1>
            <div className=' md:flex items-start justify-between'>
                <p className='mb-8 md:texl-lg lg:text-xl font-bold'>Crafted with Purpose.</p>
                <div className='right md:w-[46%] lg:w-[31%] flex flex-col gap-4 items-start'>
                    <p className='text-[14px] md:text-[16px] lg:text-lg'>Founded in 2017, Studio Arcé creates timeless spaces for residential, commercial, and hospitality projects with a focus on style.</p>
                    <p className='text-[14px] md:text-[16px] lg:text-lg'>With 120+ clients, we blend artistry, craftsmanship, and collaboration to transform spaces into inspiring, lasting environments.</p>
                    <button className='font-medium md:text-[18px] hover:underline cursor-pointer'>Learn more <i className="ri-arrow-right-up-line"></i></button>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Aboutus