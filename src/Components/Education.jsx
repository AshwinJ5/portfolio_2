import Aos from 'aos';
import React, { useEffect } from 'react'

function Education() {

  useEffect(()=>{
    Aos.init({duration:1000});
  },[])

  return (
    <>
         <div className='container mainContactDiv' id='education'>
        <h2>EDUCATION</h2>
        <div className='divCenter'>My Qualification?</div>
        <div className="row w-100">
            <div className="col-lg-6 my-auto colRow col-12"   data-aos-once='true'  data-aos='fade-right'>
            <h4>Bachelors Degree</h4>  
              <div>
              B-Tech in Mechanical Engineering
              </div>
              <div>
              College- Kottyam Institute of Technology & Science
              </div>
              <div>
              University- 
              APJ Abdul Kalam Technological University
              </div>
              <div>2016-2020</div>
              <br />
              {/* <a href='https://wa.me/+918606089808' className='whatsappButton mt-3'>
              <i className="fa-brands fa-whatsapp"></i>
              Chat on WhatsApp
              </a> */}
            </div>
            <div className="col-lg-6  my-auto colRow col-12"  data-aos='fade-right'  data-aos-once='true'  data-aos-delay='300'>
            <h4>Higher Secondary Education</h4>  
   
              <div>
              School- Holy Family Higher Secondary School
              </div>
              <div>2014-2016</div>
              </div>
        </div>
    </div>
    </>
  )
}

export default Education