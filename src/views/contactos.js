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
        <div className="card-content">
          <h1 className="contactos-text">Onde estamos</h1>
          <ContactLinks rootClassName="contact-links-root-class-name1"></ContactLinks>
        </div>
        <Map rootClassName="map-root-class-name"></Map>
        <ContactForm rootClassName="contact-form-root-class-name"></ContactForm>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Contactos
