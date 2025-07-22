import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/projects'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full h-full bg-black py-5 flex-col justify-items-center'>
      {/* <Navbar/> */}
      
      <Hero/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
