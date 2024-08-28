import React from 'react'
import './Blog.css'
import innovation_pic from '../../assets/innovations.svg'
import power_pic from '../../assets/power.svg'
import cultivating_pic from '../../assets/cultivating.svg'

const Blog = () => {
  return (
    <div className='blogs container'>
    <div className='blogs-text'>
        <h1> Our Blog</h1>
        <p>Li Europan lingues es membres del sam familie. Lor separat existentie es  <br />un myth. 
            Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
        </p>
    </div>
    <div className='blogs-body'>

        <div className='blog'>
        <img src={innovation_pic} alt="" />
        <div className='blog-text'>
        <p> <strong>Innovations for a  <br />Greener Future</strong></p>
        <p>Li Europan lingues es membres del sam familie.
             Lor separat existentie es un myth. Por scientie, musica.</p>
             <a href="#"> Read More</a>
             </div>
         </div>

        <div className='blog'>
        <img src={power_pic} alt="" />
        <div className='blog-text'>
        <p> <strong> The Power of <br /> Agricultural Analytics </strong> </p>
        <p>Li Europan lingues es membres del sam familie.
        Lor separat existentie es un myth. Por scientie, musica.</p>
        <a href="#"> Read More</a>
        </div>
        </div>
       
        <div className='blog'>
        <img src={cultivating_pic} alt="" />
       <div className='blog-text'>
        <p> <strong>Cultivating Sustainable <br /> and Resilient Farms </strong></p>
        <p>Li Europan lingues es membres del sam familie.
             Lor separat existentie es un myth. Por scientie, musica.</p>
             <a href="#"> Read More</a>
             </div>
        </div>
       
    </div>
   

</div>
  )
}

export default Blog
