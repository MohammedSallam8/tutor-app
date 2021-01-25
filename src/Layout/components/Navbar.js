import React,{ useState } from 'react'
import NavbarBlock from './NavbarBlock'
import "./style/Navbar.scss"

export default () => {
  const [ navBlock, setnavBlock ] = useState(false)
  return (
    <div className="container-flouid SectionCover">
      <div className="container">
        <div className="navs">
          <div className="navbrand"><a href="#"><h2>Tutor</h2></a></div>
          <div className="navlink">
            <ul>
              <li className="navlink99 active"><a href="#Home">Home</a></li>
              <li className="navlink99"><a href="#">Tutorials</a></li>
              <li className="navlink99"><a href="#">Testimonials</a></li>
              <li className="navlink99"><a href="#">Blog</a></li>
              <li className="navlink99"><a href="#">About</a></li>
              <li className="navlink99"><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="dropdown-itemtoggle">
            <span className="togs"><i onClick={() => setnavBlock(!navBlock)} class="fas fa-bars"></i></span>
            { navBlock ? <NavbarBlock /> : null }
          </div>
        </div>
      </div>
        <div className="thot"><h1>The <strong>Hub</strong> Of <strong>Tutorials</strong></h1></div>
    </div>
  )
}