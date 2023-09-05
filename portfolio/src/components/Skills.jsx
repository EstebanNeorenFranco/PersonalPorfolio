import React from 'react'
import css from '../img/css.png'
import js from '../img/js.png'
import tailwind from '../img/tailwind.png'
import react from '../img/react.png'
import python from '../img/python.png'
import sql from '../img/sql.png'

function Skills() {
  return (
    <div className='bg-cover py-20'>
      <div className='mx-auto px-8 md:px-54 lg:px-80 '>
        <h2 className='flex pl-4 text-center pb-10 pt-10 w-full h-full text-3xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 rounded'>Skills:</h2>
        <div className='justify-center hidden sm:flex space-x-12 pb-12 object-center'>
            <div className='w-20'>
                <img src={css} alt="css" className=' w-auto h-auto'/>
            </div>
            <div className='w-28'>
                <img src={js} alt="js" className=' w-auto h-auto'/>
            </div>
            
            <div className=' w-28'>
                <img src={react} alt="react" className=' w-auto h-auto'/>
            </div>
            
            <div className='w-28'>
                <img src={tailwind} alt="tailwind" className=' w-auto h-auto'/>
            </div>
            
            <div className='w-24'>
                <img src={python} alt="python" className=' w-auto h-auto'/>
            </div>
            
            <div className='w-24'>
                <img src={sql} alt="sql" className=' w-auto h-auto'/>
            </div>
        </div>
        <div className='justify-center sm:hidden space-y-10 pb-12 object-center'>
            <div className='flex space-x-12 items-center justify-center'>
                <div className='w-20'><img src={css} alt="css" className=' w-auto h-auto'/></div>
                <div className='w-28'><img src={js} alt="js" className=' w-auto h-auto'/></div>
                <div className=' w-28'><img src={react} alt="react" className=' w-auto h-auto'/></div>
            </div>
            <div className='flex space-x-12 items-cente justify-center'>
            <div className='w-28'><img src={tailwind} alt="tailwind" className=' w-auto h-auto'/></div>
                <div className='w-24'><img src={python} alt="python" className=' w-auto h-auto'/></div>
                <div className='w-24'><img src={sql} alt="sql" className=' w-auto h-auto'/></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
