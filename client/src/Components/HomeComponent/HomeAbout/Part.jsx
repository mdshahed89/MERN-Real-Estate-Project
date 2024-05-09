import React from 'react'

function part({img, title, desc}) {
  return (
    <div className='flex  items-center justify-center flex-col gap-3 text-center max-w-[400px] text-[#303441] '>
        <div className=' max-w-[3rem] '>
            <img src={img} alt="" className='w-full h-full object-cover ' />
        </div>
        <h3 className=' text-[1.1rem] md:text-[1.3rem] font-semibold  '>{title}</h3>
        <p className=' text-sm md:text-base'>{desc}</p>
    </div>
  )
}

export default part