import React from 'react'
import SocialLinks from './SocialLinks'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <div className='relative min-h-screen bg-slate-600 flex items-center justify-center flex-col'>
      <img className='mb-[1.5rem]' src= "https://i.ibb.co/zS38BWV/9434621.png" width={160} height={145}  />
      <h1 className='text-[2.] font-bold'>Hemant Tomar</h1>
      <p>I am Full Stack Developer</p>
     <SocialLinks/>
     <a href="#contact">Hire Me</a>
     <ScrollDown/>
    </div>
  )
}

export default Home
