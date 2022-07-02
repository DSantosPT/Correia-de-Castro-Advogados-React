import React from 'react'

import { Helmet } from 'react-helmet'

import Hero from '../components/hero'
import ContactLinks from '../components/contact-links'
import Map from '../components/map'
import ContactForm from '../components/contact-form'
import Footer from '../components/footer'
import './contactos.css'

const Contactos = (props) => {
  return (
    <div className="contactos-container">
      <Helmet>
        <title>Contactos - Correia de Castro Advogados</title>
        <meta
          property="og:title"
          content="Contactos - Correia de Castro Advogados"
        />
      </Helmet>
      <Hero
        heading="Contactos e Localização"
        rootClassName="hero-root-class-name2"
      ></Hero>
      <div className="card">
        <div className="contactos-icon">
          <svg viewBox="0 0 804.5714285714286 1024" className="contactos-icon1">
            <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
          </svg>
        </div>
        <div className="contactos-container1">
          <div className="card-content">
            <h1 className="contactos-text">Onde estamos</h1>
            <ContactLinks></ContactLinks>
            <Map rootClassName="map-root-class-name"></Map>
          </div>
          <ContactForm rootClassName="contact-form-root-class-name"></ContactForm>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Contactos
