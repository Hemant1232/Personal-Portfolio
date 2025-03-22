import React from 'react'
import SocialLinks from './SocialLinks'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <div className='relative min-h-10'>
        <img src= "https://i.ibb.co/zS38BWV/9434621.png" width={160} height={145}  />
      <h1 className='text-xl font-bold'>Hemant Tomar</h1>
      <p>I am Full Stack Developer</p>
     <SocialLinks/>
     <a href="#contact">Hire Me</a>
     <ScrollDown/>
    </div>
  )
}

export default Home
