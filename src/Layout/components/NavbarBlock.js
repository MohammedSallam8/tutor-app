import React, { useState } from 'react'
import './style/NavbarBlock.scss'

export default function NavbarBlock () {
  const [ toggle, setToggle ] = useState(true)
  return (
    <>
    { toggle ?
    <div className="navBlock">
      <div className="x">
        <span><i onClick={() => setToggle(!toggle)} class="fas fa-times x1"></i></span>
      </div>
        <div className="navlink1">
            <ul>
              <li><a className="active" href="#">Home</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
    </div>
    : null }
    </>
  )
  
}