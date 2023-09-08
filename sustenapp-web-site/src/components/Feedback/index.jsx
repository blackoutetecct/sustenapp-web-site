import './style.css'
import feedback1 from './../../assets/feedback.png'
import feedback2 from './../../assets/feedback2.png'
import feedback3 from './../../assets/feedback3.png'
import feedback4 from './../../assets/feedback4.png'

import { useEffect, useState } from 'react';

import InfiniteCarousel from 'react-leaf-carousel';

export default function Feedback() {

    const [ viewportWidth, setViewportWidth ] = useState(window.innerWidth)

    useEffect(() => {
        setViewportWidth(viewportWidth)
    }), []

    return(

        <section className='feedback'>
            <h1> COMENTÁRIOS </h1>

            <div className='carousel-feedback'>

            <InfiniteCarousel
            
            dots={true}
            showSides={true}
            sidesOpacity={1}
            sideSize={0.0}
            slidesToScroll={1}
            slidesToShow={viewportWidth >= '700' ? 2 : 1}
            scrollOnDevice={true}
  >
      <img
        alt=""
        src={feedback1}
      />
      <img
        alt=""
        src={feedback2}
      />
      <img
        alt=""
        src={feedback3}
      />
      <img
        alt=""
        src={feedback4}
      />
   
  </InfiniteCarousel>

            </div>
        </section>

    )
}