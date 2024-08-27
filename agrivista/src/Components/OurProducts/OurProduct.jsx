import React from 'react'
import './OurProduct.css'
import rice from '../../assets/rice.svg'
import wheat from '../../assets/wheat.svg'
import pumpkin from '../../assets/pumpkin.svg'
import cabbage from '../../assets/cabbage.svg'

const OurProduct = () => {
  return (
    <div className='products container'>
    <div className='products-text'>
        <h1> Our Featured Products</h1>
        <p>Li Europan lingues es membres del sam familie. <br />
            Lor separat existentie es un myth Por scientie, musica.
        </p>
    </div>
    <div className='products-body'>
        <div className='product'>
        <img src={rice} alt="" />
        <p> Blog and Article Writing</p>
        </div>
        <div className='product'>
        <img src={wheat} alt="" />
        <p> Website <br /> Content</p>
        </div>
        <div className='product'>
        <img src={pumpkin} alt="" />
        <p> Content Strategy <br /> and Consulting</p>
        </div>
        <div className='product'>
        <img src={cabbage} alt="" />
        <p> Social Media <br/> Management</p>
        </div>
       
    </div>
    <a href="#"> See all products</a>

</div>
  )
}

export default OurProduct
