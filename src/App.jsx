import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Services from './Components/Services'
import Skills from './Components/Skills'
import 'aos/dist/aos.css'

function App() {

  return (
    <>
      <Navbar/>
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App