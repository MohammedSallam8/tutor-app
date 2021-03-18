import React from 'react'
import Navbar from './components/Navbar'
import CoverSection from './components/CoverSection'
import CardSection from './components/CardSection'
import CourseSection from './components/CourseSection'
import Latest from './components/Latest'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <CoverSection />
      <CardSection />
      <CourseSection />
      <Latest />
      <Testimonials />
      <Footer />
    </div>
  )
}