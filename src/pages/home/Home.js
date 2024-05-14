import React from 'react'
import Profile from '../../assets/assets/home.jpg'
import {Link} from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
import './home.css';


const Home = () => {
  return (
   <section className='home section grid'>

   <img src={Profile} alt=" img" className='home__img'></img>

   <div className='home__content'>
    <div className='home__data'>
      <h1 className='home__title'><span>I'm Amanpreet </span>
      Full Stack Web Developer</h1>
      <p className='home__description'>
        I am a Full Stack web Developer and i am passionate about building excellent Websites that improves the lives of those around me.
      </p>

      <Link to='/about' className="button">
        More About Me <span className='button__icon'><FaArrowRight/></span>
      </Link>
    </div>
   </div>

   <div className='color__block'></div>

   </section>
  );
};

export default Home