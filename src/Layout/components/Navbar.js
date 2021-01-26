import React,{ useState } from 'react'
import NavbarBlock from './NavbarBlock'
import "./style/Navbar.scss"

export default () => {
  const [ navBlock, setNavBlock ] = useState(false)
  return (
    <div className="container-fluid section-cover">
      <div className="container">
        <div className="navs">
          <div className="navBrand"><a href="#"><h2>Tutor</h2></a></div>
          <div className="navLink">
            <ul>
              <li className="navLinks active"><a href="#Home">Home</a></li>
              <li className="navLinks"><a href="#">Tutorials</a></li>
              <li className="navLinks"><a href="#">Testimonials</a></li>
              <li className="navLinks"><a href="#">Blog</a></li>
              <li className="navLinks"><a href="#">About</a></li>
              <li className="navLinks"><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="dropdown-itemToggle">
            <span className="itemToggler"><i onClick={() => setNavBlock(!navBlock)} class="fas fa-bars"></i></span>
            { navBlock ? <NavbarBlock /> : null }
          </div>
        </div>
      </div>
        <div className="thot"><h1>The <strong>Hub</strong> Of <strong>Tutorials</strong></h1></div>
    </div>
  )
}