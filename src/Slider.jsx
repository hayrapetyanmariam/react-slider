import React from 'react'
import { useState, useEffect } from 'react'
import {Animated} from "react-animated-css";

export const Slider = ({slides}) => {

  const [showSlide, setShowSlide] = useState(1);
  const [animationVisible, setAnimationVisible] = useState(true);

  useEffect(()=>{

    let a = 0;
    const interval = setInterval(()=>{
      if(a === 5) a = 1
      setShowSlide(a)
      animationTimeOut()
      a++ 
    }, 3000)

  },[])

  const animationTimeOut = ()=>{
    setAnimationVisible(false);
    setTimeout(()=>{
      setAnimationVisible(true)
    }, 300)
  }

  const moveSlider = (id)=>{
    setShowSlide(id);
    animationTimeOut();
  }

  const prevSlide = ()=>{
    if(showSlide === 1) setShowSlide(slides.length)
    else setShowSlide(showSlide - 1);
    animationTimeOut();
  }

  const nextSlide = ()=>{
    if(showSlide === slides.length) setShowSlide(1)
    else setShowSlide(showSlide + 1);
    animationTimeOut();
  }

  return (
    <div className='Slider'>
      <div className="slider-wrap">
        {
          slides.map(slide=> 
            <div key={slide.id} className = {slide.id === showSlide ? 'slide active' : 'slide'}>
                <div className='slide-img' style={ {backgroundImage: `url(${slide.url})`} }></div>
                <div className='slide-title'>
                <Animated animationIn={slide.animationIn} animationOut={slide.animationOut} isVisible={animationVisible}>
                      <h2>{slide.title}</h2>
                </Animated>
                </div>
            </div>
          )
        }
      </div>
      <div className="slider-indicator">
        {
          slides.map(slide=>
          <span key={slide.id} className={slide.id === showSlide ? 'active' : ''} onClick = {()=>moveSlider(slide.id)}></span>)
        }
      </div>
      <span className='slide-arrow slider-arrow-prev' onClick={prevSlide}></span>
      <span className='slide-arrow slider-arrow-next' onClick={nextSlide}></span>
    </div>
  )
}
