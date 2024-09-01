import React, { useEffect } from 'react'
import './about.css'
import { ReactTyped } from "react-typed";
import img from '../assets/dp.jpg'
import { Button } from 'react-bootstrap';
import resume from '../assets/aj.pdf'
import Aos from 'aos'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';


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
            <div className="col-lg-5 aboutImg" data-aos='fade-right' data-aos-once='true'  data-aos-delay='1000'>
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
                <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/profile.php?id=100005228958736' role='button'>
            <MDBIcon className='icon' style={{color:'#316FF6'}} fab icon='facebook-f' />
          </MDBBtn>


          <MDBBtn outline color="light" floating className='m-1' href='mailto:ashwinjoseph03@gmail.com' role='button'>
          <MDBIcon  style={{color: '#C71610'}} className='icon' fas icon='envelope' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/ashwin-joseph-737602298/' role='button'>
            <MDBIcon style={{color:'#0077B5 '}} className='icon' fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 github' href='https://github.com/AshwinJ5' role='button'>
            <MDBIcon className='smediaLogo icon' fab icon='github' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/mr_a_j_5/' role='button'>
            <MDBIcon style={{color:'#d62976 '}} className='icon' fab icon='instagram' />
          </MDBBtn>

          {/* <MDBBtn outline color="light" floating className='m-1 twitter' href='https://twitter.com/AshwinJ49426441' role='button'>
            <MDBIcon className='smediaLogo icon' fab icon='x-twitter' />
          </MDBBtn> */}
         
          <MDBBtn outline color="light" floating className='m-1' href='https://wa.me/+918606089808' role='button'>
            <MDBIcon  style={{color:'#25D366'}} className='smediaLogo icon' fab icon='whatsapp' />
          </MDBBtn>

        </section>
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