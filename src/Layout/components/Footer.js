import React from 'react'
import './style/Footer.scss'

export default function Footer() {
  return(
    <div className="footer">
      <div className="container">
        <div className="row">


          <div className="col-lg-3">
            <h2>About Us</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <ul>
              <li className="li-links">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="li-links">
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li className="li-links">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li className="li-links">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                 </a>
              </li>
            </ul>
          </div>



          <div className="col-lg-8 ml-auto">
            <div className="row">


              <div className="col-lg-3">
                <h2>Quick Links</h2>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>


              
              <div className="col-lg-3">
                <h2>Resources</h2>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>


              
              <div className="col-lg-3">
                <h2>Support</h2>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>



              <div className="col-lg-3">
                <h2>Company</h2>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>



            </div>
          </div>
        </div>

        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <p>Copyright ©2021 All rights reserved | This template is made with <i class="fas fa-heart"></i> by <a href="#">Colorlib</a></p>
          </div>
        </div>


      </div>
    </div>
  )
}