import React from 'react'
import './Benefit.css'
import product_icon from '../../assets/product.svg'
import check_icon from '../../assets/check.svg'
import localteam from '../../assets/localteam.svg'
import rating from '../../assets/Rating.svg'
import arrow from '../../assets/arrow.svg'


const Benefit = () => {
  return (
    <div className='benefits container'>
      <div className='benefits-left'>
        <h2>
        The Benefits of Choosing Our Expertise
        </h2>
        <p>
        Li Europan lingues es membres del sam familie.
         Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. 
        </p>
        <div className='benefits-left-button'>
        <button className='btn_green'> Learn More   </button>
        <img src={arrow} alt="" />
        </div>
       </div>
      <div className='benefits-right'>
        <div className='benefit'>
            <img src={rating} alt="" />
            <div className='sub_benefit'>
                <h2>15+</h2>
                <p>Years of Experience</p>
            </div>
        </div>
        
        <div className='benefit'>
            <img src={product_icon} alt="" />
            <div className='sub_benefit'>
                <h2>40+</h2>
                <p>Product</p>
            </div>
        </div>

        <div className='benefit'>
            <img src={check_icon} alt="" />
            <div className='sub_benefit'>
                <h2>2,458+</h2>
                <p>Satisfied Clients</p>
            </div>
        </div>

        <div className='benefit'>
            <img src={localteam} alt="" />
            <div className='sub_benefit'>
                <h2>20</h2>
                <p>Local Team Members </p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Benefit
