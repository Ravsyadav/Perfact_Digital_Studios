import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import About from './routes/About'
import Services from './routes/Services'
import Contact from './routes/Contact'
import Gallery from './routes/Gallery'
import Footer from './components/Footer'

const App = () => {

  // init aos
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:false,
      offset:100
    })

    //Parallax effect
    const handleScroll = () =>{
      const scrolled = window.pageYOffset
      const heroBg = document.querySelector('.hero-bg')
      if(heroBg){
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  }, [])

  return (
    <div className='bg-cream text-charcoal font-inter'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App

    {/*<Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>*/}