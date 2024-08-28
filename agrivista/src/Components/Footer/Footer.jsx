import React from 'react'
import './Footer.css'
import instagram from '../../assets/instagram.svg'
import facebook_icon from '../../assets/facebook_icon.svg'
import behance_icon from '../../assets/behance_icon.svg'
import web_icon from '../../assets/web_icon.svg'

const Footer = () => {
  return (
    <div className='footer container'>
       
      <div className='footer_left'>
        <h2>AgriVista Farms</h2>
        <p>Li Europan lingues es membres del sam <br /> familie. Lor separat existentie</p>
        <div className='footer_icons'>
        <img src={instagram} alt="" />
        <img src={web_icon} alt="" />
        <img src={facebook_icon} alt="" />
        <img src={behance_icon} alt="" />
        </div>
      </div>
      <div className='footer_right'>
           <div className='footer_list'>
          <h2>Pages </h2>
                <ul>
                    <li><a href='#'> Home</a> </li>
                    <li><a href='#'> About </a></li>
                    <li> <a href='#'>Product </a> </li>
                    <li><a href='#'> Blog </a> </li>
                </ul>
           </div>
           <div className='footer_list'>
           <h2>About </h2>
                <ul>
                    <li><a href='#'> Testimonials</a> </li>
                    <li><a href='#'> Our Service </a></li>
                    <li> <a href='#'>Contact Us </a> </li>
                    <li><a href='#'> Benefit </a> </li>
                </ul>
           </div>
           
      </div>
      
    </div>
  )
}

export default Footer
