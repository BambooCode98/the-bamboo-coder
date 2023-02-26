import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import Head from 'next/head';


function ContactForm() {
  const [state, handleSubmit] = useForm("xdovgnnd");
  if (state.succeeded) {
      return <p className='response-text'>Thanks for your feedback!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form" action='https://formspree.io/f/xdovgnnd'>
      <label htmlFor="name">
        Name
      </label>
      <input
        id="name"
        type="name" 
        name="name"
        placeholder="Name"
        className='contact-input'
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Email"
        className='contact-input'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label>
        Message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Enter Message Here"
        className='contact-input textregion'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='contact-button'>
      <span className='ct-button-text'>Submit</span>
      </button>
    </form>
  );
}


export default function Contact() {

  return (
    <>
    <Head>
      <title>Contact - The Bamboo Coder</title>
    </Head>
      <div className='contact-container'>
        <div className='contact-section'>
          <h1 className='contact-title'>Contact Information</h1>
          <p className='c-p'>You can find me on these platforms:</p>
          <ul className='c-list'>
            <li className='c-l'>
              <a href='https://github.com/BambooCode98' className='c-a'>Github - BambooCode98</a>
            </li>
            <li className='c-l'>
              <a href='https://www.linkedin.com/in/james-thomas-860181238/' className='c-a'>LinkedIn</a>
            </li>
            <li className='c-l'>
              <a href='https://www.youtube.com/@TheBambooCoder' className='c-a'>Youtube - The Bamboo Coder</a>
            </li>
            <li className='c-l'>
              <a href='https://pin.it/3A3jX5Z' className='c-a'>Pinterest - The Bamboo Coder</a>
            </li>
            
            {/* <li>Giithub: BambooCode98</li> */}
          </ul>


          <hr className='hr'/>
          <h3 className='contact-form-title'>Have a Question, Comment, or an Idea? Use the form below to send me a quick email.</h3>
          <ContactForm />
        </div>

      </div>
    </>
  )
}
