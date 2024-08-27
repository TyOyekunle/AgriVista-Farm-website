import React from 'react'
import './OurStory.css'
import field from '../../assets/field.svg'

const OurStory = () => {
  return (
    <div className='story container'>
      <div className='story-text'>
        <h1>
            Our Passion for Agriculture Nurturing Growth and Sustaining the Future
        </h1>
        <p>
        Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie,
         musica, sport etc, litot Europa usa li sam vocabular.
        </p>
        <button className='btn_green'>Get Started</button>
      </div>
      <div className='story-img'>
        <img src={field} alt="field image" />
        <button> Since 1976 </button>
      </div>
    </div>
  )
}

export default OurStory
