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
        <p> <strong>Rice</strong></p>
        <p>Li Europan lingues es <br /> membres del sam familie. <br /> Lor separat existentie es <br /> un myth. </p>
         </div>
        <div className='product'>
        <img src={wheat} alt="" />
        <p> <strong> Wheat </strong> </p>
        <p>Li Europan lingues es <br /> membres del sam familie. <br /> Lor separat existentie es <br /> un myth. </p>
        </div>
        <div className='product'>
        <img src={pumpkin} alt="" />
        <p> <strong> Pumpkin </strong></p>
        <p>Li Europan lingues es <br /> membres del sam familie. <br /> Lor separat existentie es <br /> un myth. </p>
         </div>
        <div className='product'>
        <img src={cabbage} alt="" />
        <div className='product-text'>
        <p> <strong> Cabbage </strong></p>
        <p>Li Europan lingues es <br /> membres del sam familie. <br /> Lor separat existentie es <br /> un myth. </p>
        </div>
        </div>
       
    </div>
    <a href="#"> See all products</a>

</div>
  )
}

export default OurProduct
