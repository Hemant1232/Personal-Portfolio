import React from 'react'
import SocialLinks from './SocialLinks'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

const Home = () => {
  return (
    <div className='relative min-h-screen flex text-center items-center justify-center flex-col'>
      <img className='mb-[1.5rem]' src= "https://i.ibb.co/zS38BWV/9434621.png" width={160} height={145}  />
      <h1 className='text-[2.25rem] mb-[0.5rem] font-bold'>Hemant Tomar</h1>
      <p className=''>I am Full Stack Developer</p>
     <SocialLinks/>
     <a href="#contact" className="p-[0.75rem] px-[2rem] leading-none rounded-[1.875rem] shadow-[1.875rem] border-[1px] border-transparent text-white inline-block bg-first_color font-bold">Hire Me</a>
     <ScrollDown/>
     <Shapes/
    </div>
  )
}

export default Home
