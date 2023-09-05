import React from 'react'
import esteban from '../img/esteban.jpg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Hero() {
  return (
    
    <div className='py-10'>
      <div className='px-14 flex '>
        <div className=' mx-auto text-center py-6 '>
          <img src={esteban} alt='Image not found' className='rounded-full h-44'/>
          <h4 className='py-8 font-sans font-semibold text-2xl'>Hi! 🖐🏻</h4>
        </div>
      </div>
      <div className='pt-3 mx-auto text-center px-6 md:px-54 lg:px-80'>
        <div className='justify-center flex items-center space-x-2'>
          <p className=' font-sans  font-semibold text-lg dark:text-gray-100'>💻 I'm Esteban, a programmer especialising in <span className=' font-bold dark:text-white'>Full Stack development</span></p>
        </div>
          <p className='pt-2 text-gray-800 dark:text-gray-200'>Argentina, Ciudad Autonoma de Buenos Aires</p>
          <div className='sm:pt-36 pt-20'>
              <KeyboardArrowDownIcon className='animate-ping duration-1000'/>
          </div>
          </div>
    </div>
  )
}

export default Hero
