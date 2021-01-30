import React from 'react'
import Navbar from './components/Navbar'
import CoverSection from './components/CoverSection'
import CardSection from './components/CardSection'
import CourseSection from './components/CourseSection'

export default function Home() {
  return (
    <div>
      <Navbar />
      <CoverSection />
      <CardSection />
      <CourseSection />
    </div>
  )
}