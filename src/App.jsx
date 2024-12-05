import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import { Contact, Pricing,Hero, Navbar, Tech } from './components';


const  App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Pricing />      
        <Tech />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
