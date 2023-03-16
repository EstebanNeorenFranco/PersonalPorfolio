import React from 'react'
import esteban from '../images/esteban.jpg'
import flag from '../images/argentina.png' 


function Hero() {
  return (
    
    <div className=' py-20 pb-36 '>
      <div className='px-14 flex '>
        <div className=' mx-auto text-center '>
          <img src={esteban} alt='Image not found' className='rounded-full h-44'/>
          <h4 className='py-8 font-sans font-semibold text-2xl'>Hi! 🖐🏻</h4>
        </div>
      </div>
      <div className=' pt-4 pb-10 mx-auto text-center px-8 md:px-54 lg:px-80'>
        <div className='justify-center flex items-center space-x-2'>
          <p className=' font-sans text-lg font-semibold'>💻 I'm Esteban a web developer from Argentina</p>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, possimus voluptatem. Mollitia velit soluta quibusdam sit alias rem debitis eos ducimus numquam ipsam modi esse ullam, sed libero illum! Soluta?</p>
        
      </div>
    </div>
  )
}

export default Hero
