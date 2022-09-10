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
import './correia-de-castro-advogados.css'

const CorreiaDeCastroAdvogados = (props) => {
  return (
    <div className="correia-de-castro-advogados-container">
      <Helmet>
        <title>Correia de Castro Advogados</title>
        <meta
          name="description"
          content="Escritório de raiz familiar desde 1987, exerce as suas funções, preferencialmente, nos concelhos de V. N. Gaia, Porto, Espinho e S. M. Feira."
        />
        <meta property="og:title" content="Correia de Castro Advogados" />
        <meta
          property="og:description"
          content="Escritório de raiz familiar desde 1987, exerce as suas funções, preferencialmente, nos concelhos de V. N. Gaia, Porto, Espinho e S. M. Feira."
        />
      </Helmet>
      <div className="correia-de-castro-advogados-hero">
        <div className="correia-de-castro-advogados-bg"></div>
        <Header>
          <a href="#actividade" className="correia-de-castro-advogados-link">
            Actividade
          </a>
          <a href="#pessoas" className="correia-de-castro-advogados-text">
            Pessoas
          </a>
          <a href="#contactos" className="correia-de-castro-advogados-link1">
            Contactos
          </a>
        </Header>
        <div className="correia-de-castro-advogados-container1">
          <div className="correia-de-castro-advogados-container2">
            <h1 className="correia-de-castro-advogados-text01">
              Correia de Castro Advogados
            </h1>
            <span className="correia-de-castro-advogados-text02">
              <span>Prestamos apoio jurídico em várias áreas</span>
              <span></span>
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className="correia-de-castro-advogados-image"
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
        <a href="#actividade" className="correia-de-castro-advogados-link2">
          Actividade
        </a>
        <a href="#pessoas" className="correia-de-castro-advogados-link3">
          Pessoas
        </a>
        <a href="#contactos" className="correia-de-castro-advogados-link4">
          Contactos
        </a>
      </Footer>
      <div className="correia-de-castro-advogados-container7">
        <span className="correia-de-castro-advogados-text05">
          <span>
            Este site utiliza cookies que se destinam a otimizar a sua
            experiência de navegação. Ao utilizá-lo, está a concordar com a
            nossa
          </span>
          <br></br>
        </span>
        <span className="correia-de-castro-advogados-text08">
          <span>Política de Privacidade</span>
          <br></br>
        </span>
      </div>
      <div className="correia-de-castro-advogados-container8">
        <span className="correia-de-castro-advogados-text11">
          <span>
            Este site utiliza cookies que se destinam a otimizar a sua
            experiência de navegação. Ao utilizá-lo, está a concordar com a
            nossa
          </span>
          <br></br>
        </span>
        <Link
          to="/politica-privacidade"
          className="correia-de-castro-advogados-text14"
        >
          <span>Política de Privacidade</span>
          <br></br>
        </Link>
      </div>
    </div>
  )
}

export default CorreiaDeCastroAdvogados
