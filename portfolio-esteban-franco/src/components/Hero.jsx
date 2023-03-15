import React from 'react'
import esteban from '../images/esteban.jpg'

function Hero() {
  return (
    <div className='px-14 py-14 flex '>
      <div className=' mx-auto text-center '>
        <img src={esteban} alt='Image not found' className='rounded-full h-44'/>
        <p className='py-8 font-sans font-semibold text-lg'>Hi! 🖐🏻</p>
        
      </div>
      
    </div>
  )
}

export default Hero
