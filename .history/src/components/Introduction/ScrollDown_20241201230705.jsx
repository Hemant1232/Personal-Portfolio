import React from 'react'

const ScrollDown = () => {
  return (
    <div className='absolute bottom-10 l-0 w-full'>
      <a href="#about">
        <span>Scroll Down</span>
        <span className='border-[2px] border-[#454350] h-7 w-5 m-auto mt-3 rounded-2xl relative'>
          <span className='bg-title_color rounded-full w-1 h-1 absolute top-2 left-[50%]  '></span>
        </span>
      </a>
    </div>
  )
}

export default ScrollDown
