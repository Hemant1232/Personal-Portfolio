import React from 'react'
import SocialLinks from './SocialLinks'

const Home = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <img src= "https://i.ibb.co/zS38BWV/9434621.png" width={160} height={145}  />
      <h1 className='text-xl'>Hemant Tomar</h1>
      <p>I am Full Stack Developer</p>
     <SocialLinks/>
    </div>
  )
}

export default Home
