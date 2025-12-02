import React from 'react'

const CTA = () => {
  return (
    <div>
        <div className='w-full h-full md:h-[75vh] lg:h-[100vh] md:flex lg:px-20 lg:py-10 md:px-8 md:py-8 px-5 py-6 font-montserrat items-center justify-center md:gap-10'>
            <div className='md:w-[75%] lg:w-[60%] h-[70%] md:h-[70%]'>
                <img className='w-full h-full object-cover' src="/assets/images/16.jpg" alt="" />
            </div>
            <div className='md:w-[65%] lg:w-[30%] mt-5 lg:px-10 flex flex-col justify-between lg:gap-12 md:gap-10'>
                <h1 className=' md:text-4xl lg:text-6xl md:w-[92%] lg:w-[65%] font-light text-3xl mb-5'>Experience the <span className='font-medium'>Ultimate Living</span></h1>
                <div>
                  <div>
                <p className='md:w-[95%] lg:w-[65%] w-[85%] md:text-[17px] md:text-base/tight lg:text-2xl text-lg mb-2 font-light'><span className='font-semibold'>Have a project in mind?</span> We’d love to hear from you.</p>
                <button className='cursor-pointer hover:bg-[#3c4b58] bg-[#29343D] text-white px-6 py-3 rounded-full'>Let’s Create</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CTA