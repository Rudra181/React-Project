import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAMS' title='What We Offer'/>
        <Programs/>
        <About/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='Testimonials' title='What Students Say'/>
        <Testimonials/>
      </div>
     
    </div>
  )
}

export default App