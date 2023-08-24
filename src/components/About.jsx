import React from 'react'
import "./about.css"

const About = () => {
  return (
    <>
    
    <header className='header'>
      <a href="#" className='logo'>Crixanna.</a>

      <nav className='bag'> 
      <a href="#" className='active'>HOME</a>
      <a href="#" >ABOUT</a>
      <a href="#">SERVICES</a>
      <a href="#">PORTFOLIO</a>
      <a href="#">CONTACT</a>
      </nav>
    </header>


    <section className='home'>
<div className='home-content'>
  <h1>Hi, I'm <br /> Christiana Agbai</h1>
  <h3>Full Stack Web Developer</h3>
  <p>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Esse porro aliquid nostrum,<br /> doloribus! Molestiae officia minima facere.</p>
  <div className="btn-box">
   <a href="#">Contact Me</a>
  <a href="#">Let's Talk</a>
  </div>
</div>

<div className="home-face">
    <a href="#"><i class='bx bxl-facebook-circle'></i></a>
    <a href="#"><i class='bx bxl-twitter' ></i></a>
    <a href="#"><i class='bx bxl-linkedin-square' ></i></a>
</div>
<span className="home-imgHover"></span>
    </section>
    
    </>
  )
}

export default About