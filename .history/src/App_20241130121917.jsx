import React from 'react'
import Sidebar from './components/SideBar'
import Home from './components/Introduction/Home'
import About from './components/About/About'
import Experience from './components/Experience/Experience'

const App = () => {
  return (
    <div>
      {/* <Sidebar/> */}
      <Home/>
      <About/>
      <Experience
    </div>
  )
}

export default App
