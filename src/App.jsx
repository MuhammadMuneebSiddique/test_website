import React from 'react'
import "./App.css"
import Header from './components/header'
import { About_Section, DonateSection, DownloadSection, Hero_Section, Service_Section, TestimontalsSection } from './components/component'

function App() {
  return (
    <>
    <Header />
    <Hero_Section />
    <Service_Section />
    <About_Section />
    <DownloadSection />
    <DonateSection />
    <TestimontalsSection />
    </>
  )
}

export default App