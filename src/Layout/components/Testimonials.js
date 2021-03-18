import React from 'react'
import './style/Testimonials.scss'

export default function Testimonials() {
  return(
    <div className="testimonials bg-light">
      <div className="container">
        <div className="row student-reviews">
          <div className="col-lg-7 heading">
            <span>TESTIMONIALS</span>
            <h2>Student Reviews</h2>
          </div>
        </div>


        <div className="row">

          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="testimonial">
              <h3>Excellent Teacher!</h3>
              <div className="icon-star">
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="far fa-star"></i></span>
              </div>
              <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
              <div className="persons">
                <div className="person-img"></div>
                <div className="person-name">
                  <span style={{display: "block"}}>Mike Fisher</span>
                  <span style={{color: "#ccc"}}>Owner, Ford</span>
                </div>
              </div>
            </div>
          </div>


          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="testimonial">
              <h3>Excellent Teacher!</h3>
              <div className="icon-star">
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="far fa-star"></i></span>
              </div>
              <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
              <div className="persons">
                <div className="person-img img2"></div>
                <div className="person-name">
                  <span style={{display: "block"}}>Jean Stanley</span>
                  <span style={{color: "#ccc"}}>Traveler</span>
                </div>
              </div>
            </div>
          </div>


          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="testimonial">
              <h3>Excellent Teacher!</h3>
              <div className="icon-star">
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="far fa-star"></i></span>
              </div>
              <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
              <div className="persons">
                <div className="person-img img3"></div>
                <div className="person-name">
                  <span style={{display: "block"}}>Katie Rose</span>
                  <span style={{color: "#ccc"}}>Customer</span>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}