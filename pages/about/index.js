import Head from 'next/head';
import React, { useState } from 'react'

export default function About() {

  const [value,setValue] = useState('');
  const [validEmail,setValidEmail] = useState('')
  const [buttonType, setButtonType] = useState('submit')
  const [buttonText, setButtonText] = useState('Subscribe')
  // console.log(value);

  function validateEmail(e) {
    e.preventDefault();
    if(value.match(/[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/gm)) {
      console.log('good email');
      setButtonText('Subscribed Successfully!')
      setButtonType('submit')
    } else{
      console.log('bad email');
      setButtonText('Invalid Email, Input Again')
      setButtonType('')
    }
  }

  return (
    <>

      <Head>
        <title>About</title>
      </Head>
      <div className='about-hero'>
        <div className='about-box2'>
          <h1 className='about-title'>Have An Interest In Generative Art, AI, Web Design, or Coding?</h1>
          {/* <hr/> */}
          <div className='about-pic-container'>
            <img src='/images/social_pic_cropped.jpg' alt='' className='about-mypic'/>
          </div>
          <p className='about-vp'>Hello, my name is James Thomas. My goal with this blog is to spread the knowledge needed to make amazing generative art content. The weather is  my big inspiration for learning about and creating generative art, however, plants are also a source of inspiration for this blog!</p>

          <p className='about-vp'>The weather is such an amazing, complex system filled with so many intricate details that I have decided on trying to recreate it as a generative art style.</p>

          <p className='about-vp'>While I have much to learn yet, I hope you will find something interesting on this website that will pique your interest, and get you excited about the applications of generative art, how AI can be used in creating these systems, and perhaps pick up some coding knowledge along the way.</p>

          
          <form action='' className='about-form' method='post'>
            <h3 className='form-title'>Enter your email address below to stay updated when new content becomes available!</h3>
            {/* <input type='text' name='name' value=''/> */}
            <input type='email' name='email' onChange={e => {setValue(e.currentTarget.value)} } placeholder='Email Address' value={value} />
            <button type={buttonType} className='button' onClick={e => {validateEmail(e)}}>
              <span className='button-text'>{buttonText}</span>
            </button>

          </form>
          
          
        </div>
        
      </div>
    
    </>
  )
}
