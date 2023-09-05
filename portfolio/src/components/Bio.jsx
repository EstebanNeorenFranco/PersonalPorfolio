import React from 'react'

function Bio() {
  return (
    <div className='bg-cover '>
      <div className='mx-auto px-8 md:px-54 lg:px-80 '>
        <h2 className=' text-center w-44 h-10 text-3xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 rounded'>About me:</h2>
          <div className='py-6 space-y-4'>
              <p>Born in San Nicolas &#129481; &#127462;&#127479; and I  grew up playing boardgames and basquetball with my friends.</p>
              <p>Ever since I was a child, my fascination for technology has never waned. When I turned 12, my passion for tinkering with technology became even more evident, as I received an <span className=' font-bold'>Arduino Uno</span> as a Christmas gift. From that moment on, I have been developing various projects.</p>
              <p>This passion let me create innovative projects that can be showcased in different contests. As a result, honed my skills in various domains, including <span className='font-bold'>Machine Learning</span>, <span className='font-bold'>Microcontroller Programming</span> and  <span className='font-bold'>Web Development</span>.</p>
              <p>Nowadays I live in Buenos Aires and I study Business at <span className=' font-bold'>ITBA</span> (Buenos Aires Instute of Technology) </p>
              <p>In 2021, in my last year of school, I developed with some friends a project called NEOCULI that consist of a pair of glasses that recognice the objects the user is whatching. This project won some national prices and hackathons.</p>
              
          </div>
      </div>
    </div>
  )
}

export default Bio
