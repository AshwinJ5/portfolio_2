import Aos from 'aos';
import React, { useEffect } from 'react'

function Contact() {

  useEffect(()=>{
    Aos.init({duration:1000});
  },[])


  return (
    <div className='container mainContactDiv' id='contact'>
        <h2>CONTACT ME</h2>
        <div className='divCenter'>How to contact me?</div>
        <div className="row w-100">
            <div className="col-lg-6 my-auto colRow col-12"   data-aos-once='true'  data-aos='fade-right'>
              <h6>Get in Touch</h6>  
              <p>
              Feel free to get in touch, and let's collaborate on something thrilling, regardless of its size.
              </p>
              <div>
              <i class="fa-solid fa-at"></i>
              <span>ashwinjoseph03@gmail.com</span>
              </div>
              <div>
              <i class="fa-brands fa-github"></i>
              <a href="https://github.com/AshwinJ5">github.com/AshwinJ5</a>
              </div>
              <div>
              <i class="fa-brands fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/ashwin-joseph-737602298">linkedin.com/in/ashwin-joseph-737602298</a>
                 </div>
              <div>
              <i class="fa-solid fa-phone"></i>  
              <span>+91 8606089808</span>
              </div>
              <br />
              <a href='https://wa.me/+918606089808' className='whatsappButton mt-3'>
              <i className="fa-brands fa-whatsapp"></i>
              Chat on WhatsApp
              </a>
            </div>
            <div className="col-lg-6  my-auto colRow col-12"  data-aos='fade-right'  data-aos-once='true'  data-aos-delay='1000'>
            <h6>Subscribe me</h6>  
              <form>
                <div className="d-flex contactSuscribe">

                <input type="text" placeholder='Name' />
                <input type="number" placeholder='Mobile Number' />
                </div>
                <div className='suscribe'>
                <input type="email"  placeholder='E-Mail' />
                </div>
                <div className='suscribeTextarea'>
                <textarea  placeholder='Message...' />
                </div>

              </form>
              <br />
              <div  className='subscribeButton mt-3'>
              Subscribe
              </div>
              </div>
        </div>
    </div>
  )
}

export default Contact