import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import OurStory from './Components/OurStory/OurStory'
import OurService from './Components/OurService/OurService'
import OurProduct from './Components/OurProducts/OurProduct'
import Sustainable from './Components/Sustainable/Sustainable'
import Benefit from './Components/Benefit/Benefit'
import Testimonial from './Components/Testimonials/Testimonial'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <OurStory/>
      <OurService/>
      <OurProduct/>
      <Sustainable/>
      <Benefit/>
      <Testimonial/>
    </div>
  )
}

export default App
