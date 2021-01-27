import React from 'react'
import './style/CardSection.scss'

export default function CardSection() {
  return(
    <div className="container-fluid bg-Light">
      <div className="container">
        <div className="row m-Top">
          <div className="col-lg-8">
            <div className="card-Box">
              <div className="card-Img"></div>
              <div className="card-Text">
                <a href="#" class="card-Link">Tutorial</a>
                <h3><a href="#">Learning React Native</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quidem totam exercitationem eveniet blanditiis nulla, et possimus, itaque alias maxime!</p>
                <div className="icons">
                <span><i class="fab fa-react"></i></span>
                <span><i class="fab fa-js"></i></span>
                </div>
                <p class="card-Time">
                <span>1hr 24m &nbsp; Advanced &nbsp; Jun 18, 2020</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-Box card-Boxs">

              <div className="card-Box1">
                <div className="card-Img1"></div>
                <div className="card-Text1">
                  <a href="#" class="card-Link">Tutorial</a>
                  <h3><a href="#">Learning React Native</a></h3>
                </div>
              </div>

              <div className="card-Box1">
              <div className="card-Img2"></div>
                <div className="card-Text1">
                  <a href="#" class="card-Link">Tutorial</a>
                  <h3><a href="#">Learning React Native</a></h3>
                </div>
              </div>

              <div className="card-Box1">
                <div className="card-Img3"></div>
                <div className="card-Text1">
                  <a href="#" class="card-Link">Tutorial</a>
                  <h3><a href="#">Learning React Native</a></h3>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}