import React from 'react'
import Header from '../../components/header/header'
import BodyContent from '../../components/body/body.content'
import Footer from '../../components/footer/footer'

function LandingPage() {
  return (
    <div className='container-wrapper'>
      <Header />
      <BodyContent />
      <Footer />
    </div>
  )
}

export default LandingPage