import React from 'react'

import { Helmet } from 'react-helmet'

import Hero from '../components/hero'
import PagePessoas from '../components/page-pessoas'
import Footer from '../components/footer'
import './pessoas.css'

const Pessoas = (props) => {
  return (
    <div className="pessoas-container">
      <Helmet>
        <title>Pessoas - Correia de Castro Advogados</title>
        <meta
          property="og:title"
          content="Pessoas - Correia de Castro Advogados"
        />
      </Helmet>
      <Hero heading="Pessoas" rootClassName="hero-root-class-name"></Hero>
      <PagePessoas></PagePessoas>
      <Footer></Footer>
    </div>
  )
}

export default Pessoas
