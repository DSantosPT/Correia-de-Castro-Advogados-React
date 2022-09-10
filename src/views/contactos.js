import React from 'react'

import { Helmet } from 'react-helmet'

import Hero from '../components/hero'
import PageContactos from '../components/page-contactos'
import Footer from '../components/footer'
import './contactos.css'

const Contactos = (props) => {
  return (
    <div className="contactos-container">
      <Helmet>
        <title>Contactos - Correia de Castro Advogados</title>
        <meta
          name="description"
          content="Escritório de raiz familiar desde 1987, exerce as suas funções, preferencialmente, nos concelhos de V. N. Gaia, Porto, Espinho e S. M. Feira."
        />
        <meta
          property="og:title"
          content="Contactos - Correia de Castro Advogados"
        />
        <meta
          property="og:description"
          content="Escritório de raiz familiar desde 1987, exerce as suas funções, preferencialmente, nos concelhos de V. N. Gaia, Porto, Espinho e S. M. Feira."
        />
      </Helmet>
      <Hero
        heading="Contactos e Localização"
        rootClassName="hero-root-class-name2"
      ></Hero>
      <PageContactos></PageContactos>
      <Footer></Footer>
    </div>
  )
}

export default Contactos
