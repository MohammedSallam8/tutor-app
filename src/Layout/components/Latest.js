import React from 'react'
import './style/Latest.scss'

export default function Latest() {
  return(
    <div className="latest-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <input className="form-search" type="search" placeholder="Search subjects" />
            <input className="btn btn-primary" type="submit" value="Search" />
          </div>
          <div className="col-lg-6 text-right">
            <div className="right-form">
              <span className="from-span">Share:</span>
              <a href="#" className="social-item">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-item">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-item">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="heading">
              <span>LATEST</span>
              <h2>Tutorials</h2>
            </div>
          </div>


          <div className="col-lg-8">
              <div className="card-Box">
                <div className="card-Img img1"></div>
                <div className="card-Text">
                  <h3><a href="#">Learning React Native</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quidem totam exercitationem eveniet blanditiis nulla, et possimus, itaque alias maxime!</p>
                  <div className="icons">
                  <span><i class="fab fa-react"></i></span>
                  <span><i class="fab fa-js"></i></span>
                  </div>
                  <p class="card-Time">
                  <span>1hr 24m &nbsp; Advanced &nbsp; Jun 18, 2020</span>
                  </p>
                  <a href="#" class="btn btn-primary custom-btn">View</a>
                </div>
              </div>

              <div className="card-Box">
                <div className="card-Img img2"></div>
                <div className="card-Text">
                  <h3><a href="#">Learning Angular 101</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quidem totam exercitationem eveniet blanditiis nulla, et possimus, itaque alias maxime!</p>
                  <div className="icons">
                  <span><i class="fab fa-angular"></i></span>
                  <span><i class="fab fa-js"></i></span>
                  </div>
                  <p class="card-Time">
                  <span>1hr 24m &nbsp; Advanced &nbsp; Jun 18, 2020</span>
                  </p>
                  <a href="#" class="btn btn-primary custom-btn">View</a>
                </div>
              </div>

              
              <div className="card-Box">
                <div className="card-Img img3"></div>
                <div className="card-Text">
                  <h3><a href="#">Learning Photoshop</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quidem totam exercitationem eveniet blanditiis nulla, et possimus, itaque alias maxime!</p>
                  <div className="icons">
                    <span className="icon-Span photoshop">
                      <h2 className="icon-Link">Ps</h2>
                    </span>
                  </div>
                  <p class="card-Time">
                  <span>1hr 24m &nbsp; Advanced &nbsp; Jun 18, 2020</span>
                  </p>
                  <a href="#" class="btn btn-primary custom-btn">View</a>
                </div>
              </div>

              <div className="card-Box">
                <div className="card-Img img4"></div>
                <div className="card-Text">
                  <h3><a href="#">Advance Illustrator</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quidem totam exercitationem eveniet blanditiis nulla, et possimus, itaque alias maxime!</p>
                  <div className="icons">
                  <span className="icon-Span illustrator">
                      <h2 className="icon-Link">Ai</h2>
                  </span>
                  </div>
                  <p class="card-Time">
                  <span>1hr 24m &nbsp; Advanced &nbsp; Jun 18, 2020</span>
                  </p>
                  <a href="#" class="btn btn-primary custom-btn">View</a>
                </div>
              </div>


            <div className="">
              <ul class="list-unstyled">
                <li><a href="#"><span>1</span></a></li>
                <li><span>2</span></li>
                <li><a href="#"><span>3</span></a></li>
                <li><a href="#"><span>4</span></a></li>
                <li><a href="#"><span>5</span></a></li>
              </ul>
            </div>


          </div>


          <div className="col-lg-4">
            <div className="right-card">
              <div className="right-card-img img1"></div>
              <h3>Learning React Native</h3>
            </div>


            <div className="right-card">
            <div className="right-card-img img2"></div>
              <h3>Learning React Native</h3>
            </div>


            <div className="right-card">
            <div className="right-card-img img3"></div>
              <h3>Learning React Native</h3>
            </div>


          </div>

          
        </div>
      </div>
    </div>
  )
}