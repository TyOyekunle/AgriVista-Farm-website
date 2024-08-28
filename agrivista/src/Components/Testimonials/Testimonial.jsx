import React, {useRef} from 'react'
import './Testimonial.css'
import star_rating from '../../assets/star_rating.svg'
import testimonial_pic from '../../assets/testimonial_pic.svg'
import back_arrow from '../../assets/back_arrow.svg'
import next_arrow from '../../assets/next_arrow.svg'

const Testimonial = () => {


// code for the slider and arrows.
const slider = useRef();  //used to select/access the ul tag
let tx = 0; //tx is translate x.(as in transform: translateX(-50%);) we are initializing it to 0.
// that means it will display only the first and the second testimonials

const slideForward = ()=>{ // the condition is that the slide forward will only work if the translation along the X axis is greater than 50.meaning 50% of the width of the page which is 200px
  if (tx > -50){ // if it is greater than -50, thats when the slide will change forward.
    tx -=25; // when tx is 0, it will decrease tx by -25. 
            //when it is -25 again, it will decrease by -25 again 
  }
  // selecting the element 
  slider.current.style.transform = `translatex(${tx}%)`
}
const slideBackward = ()=>{
  if (tx < 0){ // if it is less than 0, thats when the slide backward will change.
    tx +=25; // when tx is 0, it will increase tx by +25. 
            //when it is -25 again, it will decrease by -25 again 
  }
  // selecting the element 
  slider.current.style.transform = `translatex(${tx}%)`
}



  return (
    <div className='testimonial_div'>
       <div className='testimonial_heading'>
             
          <h1>Testimonials</h1>
          <p>Li Europan lingues es membres del sam familie.
             Lor separat existentie es un myth. Por scientie, musica, 
            sport etc, litot Europa usa li sam vocabular.</p>
        </div>
      
        
      <img src={back_arrow} alt="" className='back-arrow'
      onClick={slideBackward} />
      <img src={next_arrow} alt="" className='next-arrow' 
      onClick={slideForward} />


        <div className='slider'>
        <ul ref={slider} >
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={testimonial_pic} alt="" className='testimonial_picture' />
                    <div className='user-info-right'>
                      <img src={star_rating} alt="" className='five_star_icon' />
                      <h2> Madeline Williamson </h2>
                      <span> Forward Creative Manager </span>
                      <p> Li Europan lingues es membres del sam familie. Lor  separat existentie es un myth. 
                        Por scientie, musica,  sport etc, litot Europa usa li sam vocabular. </p>  
                      </div>
                  </div>
                      
            </div>
          </li>

          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={testimonial_pic} alt="" className='testimonial_picture' />
                    <div className='user-info-right'>
                      <img src={star_rating} alt="" className='five_star_icon' />
                      <h2> Madeline Williamson </h2>
                      <span> Forward Creative Manager </span>
                      <p> Li Europan lingues es membres del sam familie. Lor  separat existentie es un myth. 
                        Por scientie, musica,  sport etc, litot Europa usa li sam vocabular. </p>  
                      </div>
                  </div>
                      
            </div>
          </li>


        
         
        </ul>
      </div>
    </div>
  )
}

export default Testimonial
