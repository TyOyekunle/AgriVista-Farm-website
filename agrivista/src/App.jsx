import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import OurStory from './Components/OurStory/OurStory'
import OurService from './Components/OurService/OurService'
import OurProduct from './Components/OurProducts/OurProduct'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <OurStory/>
      <OurService/>
      <OurProduct/>
    </div>
  )
}

export default App
