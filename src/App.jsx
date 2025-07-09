import React from 'react'
import "./App.css"
import Header from './components/header'
import { AboutSection, DonateSection, DownloadSection, HeroSection, ServiceSection, TestimontalsSection } from './components/component'

function App() {
  return (
    <>
    <Header />
    <HeroSection />
    <ServiceSection />
    <AboutSection />
    <DownloadSection />
    <DonateSection />
    <TestimontalsSection />
    </>
  )
}

export default App
