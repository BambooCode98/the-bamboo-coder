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
          <p className='about-vp'>Hello, my name is James Thomas. Weather and plants serve as my inspiration for creating generative art forms, as I would like to try recreating these natural systems. <br/><br/>As a self-taught programmer, when I first started learning to code I never thought I would be where I am now in little over a year.Thus, my goal with this blog is to help others understand how to code while focusing on creating generative art. My aim is to write about topics that cover Javascript, Python,and machine-learning, and generative art.<br/><br/>While I have much to learn yet, I hope you will find something interesting on this website that will pique your interest, and get you excited about the applications of generative art, how AI can be used in creating these systems, and perhaps pick up some coding knowledge along the way.<br/><br/><br/><span className='a-make-bold'>Be sure to subscribe below to receive reminders about new articles, tips, and more!</span></p>

          {/*___ spread the knowledge needed to make amazing generative art content 
          My goal with this blog is to simplify the coding process, and try to explain programing concepts rangng from basic to advanced. */}
          {/* <p className='about-vp'>The weather is such an amazing, complex system filled with so many intricate details that I have decided on trying to recreate it as a generative art style.</p> */}

          {/* <p className='about-vp'></p> */}

          <iframe width="540" height="405" src="https://e88cc980.sibforms.com/serve/MUIEADg-m9aRbo52uYY91ycILZNiLSKZ5IW5IFw4objrc9pCULwHornpTJehOJfr2dRVOWNz5wFlSHn7TmuwJvM6ZJ4M4PlOTTj9_aqwtStg7eWgI8JXX2iJIakZCLsSOIPf8Ls0wY5tS7y3RQTcd2ZrwGf0ZN9qJHZ0Znih7wXvGKm5pwOIwKUlP0joq2-7P-UAt405CnlIKLOc" frameBorder="0" scrolling="auto" allowFullScreen style={{display: 'block', marginLeft: "auto",marginRight: "auto", maxWidth: "100%",}}  className="sendinblue-form"></iframe>
          {/* <form action='' className='about-form' method='post'>
            <h3 className='form-title'>Enter your email address below to stay updated when new content becomes available!</h3>
            
            <input type='email' name='email' onChange={e => {setValue(e.currentTarget.value)} } placeholder='Email Address' value={value} />
            <button type={buttonType} className='button' onClick={e => {validateEmail(e)}}>
              <span className='button-text'>{buttonText}</span>
            </button>

          </form> */}
          
          
        </div>
        
      </div>
    
    </>
  )
}
