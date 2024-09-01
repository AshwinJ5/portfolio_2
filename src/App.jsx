import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Education from './Components/Education'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Services from './Components/Services'
import Skills from './Components/Skills'
import 'aos/dist/aos.css'

function App() {
  const toTop=document.querySelector(".to-top")
  window.addEventListener("scroll",()=>{
    if(window.pageYOffset>100){
      toTop.classList.add("active")
    }else{
      toTop.classList.remove("active")

    }
  })

  return (
    <>
    <section>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Services/>
      <Contact/>
      <Footer/>

    </section>
      <a href="#" className="to-top"><i class="fa-solid fa-chevron-up"></i></a>
    </>
  )
}

export default App