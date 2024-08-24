import React, { useEffect } from 'react'
import './about.css'
import { ReactTyped } from "react-typed";
import img from '../assets/dp.jpg'
import { Button } from 'react-bootstrap';
import resume from '../assets/aj.pdf'
import Aos from 'aos'


function About() {

  useEffect(()=>{
    Aos.init({duration:1000});
  },[])

  return (
    <div className="mainAboutDiv w-100 h-100">
        <div className='container ' id='about'>
            <h2 className='text-light'>ABOUT ME</h2>
            <div className='divCenter text-light'>Who am I?</div> 
        <div className="row container  w-100 py-5">
            <div className="col-lg-5" data-aos='fade-right' data-aos-once='true'  data-aos-delay='1000'>
                <img src={img} alt="" />
            </div>
            <div className="col-lg-7"  data-aos='fade-right'>
            {/* <ReactTyped strings={["Here you can find anything"]} typeSpeed={40} /> */}
          <span className='text-light'>I am</span>
    <ReactTyped
    className='reactTyped ms-2 w-100' style={{color:'#d50f9f',fontWeight:'700',fontSize:'1.7rem',position:"relative"}}
      strings={[
          "Ashwin Joseph",
          "a MERN Stack Developer",
          "a Front-End Developer",
          "a Back-End Developer",
          "an IT Enthusiast",
          "a Full Stack Web Developer",
        ]}
      typeSpeed={40}
      backSpeed={50}
      loop
    >
    </ReactTyped>
        <br />
        <br />
                <p className='text-light' style={{fontSize:'1.1rem',textAlign:'justify'}}>
                A motivated MERN Stack Developer with a solid foundation in both front-end and back-end development. Skilled in building dynamic and responsive web applications that deliver seamless user experiences. Proficient in React, Node.js, Express.js, and MongoDB, with a strong focus on creating efficient, scalable, and maintainable code. Eager to explore innovative solutions and contribute to impactful software projects. Passionate about teamwork and always ready to take on leadership roles to drive project success. Committed to continuous learning and growth in the ever-evolving world of web development.
                </p>
                <br />
                
                <br />
                <a href={resume}  download='Ashwin Joseph CV'>
            <btn className='btn text-light my-5 me-2 rounded-pill' style={{backgroundColor:'#d50f9f'}}>Resume <span><i className="fa-solid text-white fa-download fa-bounce"></i></span></btn></a>
            </div>
        </div>
        </div>
    </div>
         )
}

export default About