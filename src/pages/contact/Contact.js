import React from 'react'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaInstagram,
  FaLinkedinIn,
 

} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';

import './contact.css';
const Contact = () => {
  return (
    <section className='contact section'>
      <h2 className='section__title'>Get In <span>Touch</span></h2>

      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>Don't be shy !</h3>

          <p className='contact__description'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be a part of your visions.</p>
        
         <div className='contact__info'>
          <div className='info__item'>
            <FaEnvelopeOpen  className='info__icon'/>

            <div>
              <span className='info__title'>Mail me</span>
              <h4 className='info__desc'>1049amanpreet@gmail.com</h4>
            </div>
          </div>

          <div className='info__item'>
            <FaPhoneSquareAlt  className='info__icon'/>

            <div>
              <span className='info__title'>Call me</span>
              <h4 className='info__desc'>+91 6283720360</h4>
            </div>
          </div>
         </div>

         <div className='contact__socials'>

          <a href="https://www.instagram.com/ama.npreet28/" className='contact__social-link'>
            <FaInstagram />
          </a>

          <a href="https://www.linkedin.com/in/amanpreet-kaur-728255251/" className='contact__social-link'>
            <FaLinkedinIn />
          </a>
         </div>

        </div>

        <form action="https://formspree.io/f/xyyqyrqa" method="POST" className='contact__form'>
          <div className='form__input-group'>
            <div className='form__input-div'>
              <input type="text" placeholder='Your Name' name='name' className='form__control' required></input>
            </div>

            <div className='form__input-div'>
              <input type="email" placeholder='Your Email'  name='email' className='form__control' required></input>
            </div>

            <div className='form__input-div'>
              <input type="text" placeholder='Your Subject'  name='text'className='form__control' required></input>
            </div>

           
          </div>

          <div className='form__input-div'>
              <textarea placeholder="Your Message" name='text' className='form__control textarea' required></textarea>
            </div>
            <button type="submit" className='button'>
              Send Message
              <span className='button__icon contact__button-icon'>
                <FiSend />
              </span>
            </button>
        </form>
      </div>
    </section>
  )
}

export default Contact