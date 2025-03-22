import React from 'react'
import Sidebar from './components/Sidebar/SideBar'
import Home from './components/Introduction/Home'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Recent Works/Projects'

const App = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-'>
      <Sidebar/>
      </div>
       <div className=''>
       <Home/>
      <About/>
      <Experience/>
      <Projects/>
       </div>
    </div>
  )
}

export default App
