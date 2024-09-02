import React from 'react'
import '../style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nos from '../components/Nos'
import SobreNos from '../components/SobreNos'


function AboutUs() {
  return (
    <main>
        <Header />
        <Nos/>
        <SobreNos />
        <Footer />
    </main>
  )
}

export default AboutUs