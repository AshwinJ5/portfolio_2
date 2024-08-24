import React, { useEffect } from 'react'
import img1 from '../assets/001.png'
import img2 from '../assets/002.png'
import img3 from '../assets/003.png'
import img4 from '../assets/004.png'
import './projects.css'
import Aos from 'aos'

function Projects() {

  useEffect(()=>{
    Aos.init({duration:'1000'});
  },[])

  return (
    <>
       <div className='container mainServicesDiv' id='projects'>
        <h2>PROJECTS</h2>
        <div className='divCenter'>See My Work!</div>

      <div  className="cont p-5 w-100"  data-aos-once='true'  data-aos='fade-right'>
        <div className="boxe p-2">
          <div className="imgBx ">
            <img src={img1}/>
          </div>
          <a target='_blank'  href="https://bms-frontend-mern-main.vercel.app/">
            <div className="content">
            <div>
              <h2  style={{fontFamily:'"Croissant One", serif'}}  >BOOKMYSEATS</h2>
              <p  style={{fontFamily:'"Croissant One", serif'}} >A movie booking website built with the MERN stack, offering features like user authentication, movie listings, seat selection, booking management, and secure payment integration.
              </p>        
            </div>
          </div>
          </a>          
        </div>
        <div className="boxe p-2">
          <div className="imgBx">
            <img src={img2}/>
          </div>
          <a target='_blank'  href="https://yummi-food-booking.vercel.app/">
            <div className="content">
            <div>
              <h2 style={{fontFamily:'"Croissant One", serif'}} >YUMMI Restaurant Food Booking</h2>
              <p style={{fontFamily:'"Croissant One", serif'}} >A MERN stack-based restaurant food booking website enabling users to browse menus, place orders, and process payments with an admin dashboard for managing menus.
              </p>             
            </div>
          </div>
          </a>        
        </div>
        <div className="boxe  p-2">
          <div className="imgBx">
          <img src={img3}/>
          </div>
          <a target='_blank'  href="https://youtube-video-library-fe.vercel.app/">
            <div className="content">
            <div>
              <h2 style={{fontFamily:'"Croissant One", serif'}} >YOUTUBE MEDIA PLAYER WEBSITE</h2>
              <p style={{fontFamily:'"Croissant One", serif'}} >A MERN stack project that allows users to embed YouTube videos, play them directly, and categorize the videos using a JSON server as the backend for dynamic content management.
              </p>
            </div>
          </div>
          </a>          
        </div>
        <div className="boxe p-2">
          <div className="imgBx">           
          <img src={img4}/>
          </div>
          <a  target='_blank' href="https://memory-flip-game-aj.netlify.app/">
            <div className="content">
            <div>
              <h2 style={{fontFamily:'"Croissant One", serif'}} >Memory Game</h2>
              <p style={{fontFamily:'"Croissant One", serif'}} >A React.js memory flip game where players match pairs of cards by flipping them, featuring interactive UI, state management, and randomized card grids for enhanced gameplay.
              </p>              
            </div>
          </div>
          </a>         
        </div>
      </div>

</div>
    </>
  )
}

export default Projects