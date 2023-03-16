import React from 'react'

function Bio() {
  return (
    <div className='bg-cover '>
      <div className='mx-auto px-8 md:px-54 lg:px-80 '>
        <h2 className=' text-center w-44 h-10 text-3xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 rounded'>About me:</h2>
          <div className='py-6 space-y-10'>
              <p className=''>Ever since I was a child, my fascination for technology has never waned. When I turned 12, my passion for tinkering with technology became even more evident, as I received an Arduino as a gift. From that moment on, I have been developing various projects, and technology has become my utmost passion.</p>
              <p>My primary goal has always been to create innovative projects that can be showcased in different contests. As a result, I have honed my skills in various domains, including machine learning, microcontroller programming, web development, and app development. These experiences have allowed me to broaden my knowledge and acquire practical skills that I use to create high-quality, cutting-edge projects.</p>
          </div>
          <div>
            {/* IMAGE SCROLL */}
          </div>
      </div>
    </div>
  )
}

export default Bio
