import React from 'react'
import './OurService.css'
import blog_icon from '../../assets/blog_icon.svg'
import website_icon from '../../assets/website_icon.svg'
import content_icon from '../../assets/content_icon.svg'
import socialmedia_icon from '../../assets/socialmedia_icon.svg'
const OurService = () => {
    return (
        <div className='services container'>
            <div className='services-text'>
                <h1> Our Services </h1>
                <p>Li Europan lingues es membres del sam familie.
                   <br /> Lor separat existentie es un myth Por scientie, musica.
                </p>
            </div>
            <div className='services-body'>
                <div className='service'>
                <img src={blog_icon} alt="" />
                <p> Blog and Article Writing</p>
                </div>
                <div className='service'>
                <img src={website_icon} alt="" />
                <p> Website <br /> Content</p>
                </div>
                <div className='service'>
                <img src={content_icon} alt="" />
                <p> Content Strategy <br /> and Consulting</p>
                </div>
                <div className='service'>
                <img src={socialmedia_icon} alt="" />
                <p> Social Media <br/> Management</p>
                </div>
                
            </div>

        </div>
    )
}

export default OurService
