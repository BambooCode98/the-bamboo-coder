import React from 'react'


export default function HomePage({posts}) {

  // console.log(posts);
  return (
    <>
      <div>
        {/* <h1>Welcome to The Bamboo Coder!</h1> */}

      </div>
      <div className='home-hero-img'>
        <h3 className='home-title'>Interested in learning Generative Art, something about AI, or coding? </h3>
        {/* <h4 className='home-title2'>Join me on my journey as I learn about these subjects and help distill these topics to you.</h4> */}
        <h4 className='home-title2'>You will find articles discussing these topics and much more here.</h4>
      </div>
      <div className='home-middle-content'>
        <h4 className='home-intro'>Introductory Posts</h4>
        <div className='home-i-container'>
          <p className='home-p'>Nothing here at the moment!</p>
        </div>
      </div>
      <div className='home-featured-posts'>
        <h4 className='home-intro'>Featured Posts</h4>
        <div className='home-i-container'>
          <p className='home-p'>Nothing here at the moment!</p>
        </div>
      </div>
      
    </>
  )
}
