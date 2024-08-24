import React, { useEffect } from 'react'
import './services.css'
import Aos from 'aos'


function Services() {

  useEffect(()=>{
    Aos.init({duration:'1000'});
  },[])
  return (
    <div  className='container mainServicesDiv' id='services'>
        <h2>SERVICES</h2>
        <div className='divCenter'>What I Provide?</div>
        <div className="row w-100 container services mx-auto my-5">
            <div className="col-lg-3 p-5" data-aos='fade-right'  data-aos-once='true' >
              <span>
                <i class="fa-solid fa-palette"></i>
                <h4>Web Development</h4>
                <p>Proficient in web design & development.</p>
              </span>
            </div>
            <div className="col-lg-3 p-5"  data-aos='fade-right'  data-aos-once='true'  data-aos-delay='500'>
              <span>
            <i class="fa-solid fa-database"></i>
            <h4>Database Management</h4>
            <p>Designing efficient database schemas.</p>
              </span>
            </div>
            <div className="col-lg-3 p-5"  data-aos='fade-right'  data-aos-once='true'  data-aos-delay='1000'>
              <span>
                <i class="fa-solid fa-code"></i>
            <h4>Rest APIs</h4>
            <p>Delivering outstanding RESTful APIs.</p>
              </span>
            
            </div>
        </div>
    </div>
  )
}

export default Services