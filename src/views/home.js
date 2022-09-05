import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SectionHeader from '../components/section-header'
import PageSobreNos from '../components/page-sobre-nos'
import PageActividade from '../components/page-actividade'
import PagePessoas from '../components/page-pessoas'
import PageContactos from '../components/page-contactos'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Correia de Castro Advogados</title>
        <meta property="og:title" content="Correia de Castro Advogados" />
      </Helmet>
      <div className="home-hero">
        <div className="home-bg"></div>
        <Header>
          <a href="#actividade" className="home-link">
            Actividade
          </a>
          <a href="#pessoas" className="home-text">
            Pessoas
          </a>
          <a href="#contactos" className="home-link1">
            Contactos
          </a>
        </Header>
        <div className="home-container1">
          <div className="home-container2">
            <h1 className="home-text1">Correia de Castro Advogados</h1>
            <span className="home-text2">
              <span>Prestamos apoio jurídico em várias áreas</span>
              <span></span>
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className="home-image"
          />
        </div>
      </div>
      <div className="card">
        <SectionHeader
          heading="Sobre nós"
          rootClassName="section-header-root-class-name1"
        ></SectionHeader>
        <PageSobreNos></PageSobreNos>
      </div>
      <div id="actividade" className="card">
        <SectionHeader
          heading="Actividade"
          rootClassName="section-header-root-class-name"
        ></SectionHeader>
        <PageActividade rootClassName="page-actividade-root-class-name"></PageActividade>
      </div>
      <div id="pessoas" className="card">
        <SectionHeader
          heading="Pessoas"
          rootClassName="section-header-root-class-name2"
        ></SectionHeader>
        <PagePessoas rootClassName="page-pessoas-root-class-name"></PagePessoas>
      </div>
      <div id="contactos" className="card">
        <SectionHeader
          heading="Contactos e Localização"
          rootClassName="section-header-root-class-name3"
        ></SectionHeader>
        <PageContactos rootClassName="page-contactos-root-class-name"></PageContactos>
      </div>
      <Footer>
        <Link to="/pessoas" className="home-navlink">
          Pessoas
        </Link>
        <Link to="/servicos" className="home-navlink1">
          Actividade
        </Link>
        <Link to="/contactos" className="home-navlink2">
          Contactos
        </Link>
      </Footer>
    </div>
  )
}

export default Home
