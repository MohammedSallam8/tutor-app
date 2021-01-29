import React from 'react'
import Navbar from './components/Navbar'
import CoverSection from './components/CoverSection'
import CardSection from './components/CardSection'

export default function Home() {
  return (
    <div>
      <Navbar />
      <CoverSection />
      <CardSection />
    </div>
  )
}