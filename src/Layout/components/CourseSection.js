import React from 'react'
import './style/CourseSection.scss'

export default function CourseSection() {
  return (
    <div className="courses">
      <div className="container">
        <div className="row">
          <div className="col mb-4">
            <span>TUTORIAL COURSES</span>
            <h2>Choose Course</h2>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-2">
            <a href="#">
              <span className="Course-Span illustrator">
              <h2 className="Course-Link">Ai</h2>
              </span>
              <h3>Illustrator</h3>
            </a>
          </div>

          <div className="col-lg-2">
            <a href="#">
              <span className="Course-Span photoshop">
                <h2 className="Course-Link">Ps</h2>
              </span>
              <h3>Photoshop</h3>
            </a>
          </div>

          <div className="col-lg-2">
            <a href="#">
              <span className="Course-Span">
                <i class="fab fa-angular"></i>
              </span>
              <h3>Angular</h3>
            </a>
          </div>

          <div className="col-lg-2">
            <a href="#">
              <span className="Course-Span">
                <i class="fab fa-js"></i>
              </span>
              <h3>JavaScript</h3>
            </a>
          </div>

          <div className="col-lg-2">
            <a href="#">
              <span className="Course-Span">
                <i class="fab fa-react"></i>
              </span>
              <h3>React</h3>
            </a>
          </div>

          <div className="col-lg-2">
            <a href="#">
              <span className="Course-Span">
                <i class="fab fa-vuejs"></i>
              </span>
              <h3>Vue</h3>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}