import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Servicos from '../components/servicos'
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
        <Header></Header>
        <div className="home-container1">
          <div className="home-container2">
            <h1 className="home-text">Correia de Castro Advogados</h1>
            <span className="home-text01">
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
        <div className="card-content home-sobre-ns">
          <h1 className="home-text04">
            <span>Sobre Nós</span>
            <br></br>
          </h1>
          <span className="home-text07">
            <span>
              Escritório de raiz familiar desde 1987, exerce as suas funções,
              preferencialmente, nos concelhos de V. N. Gaia, Porto, Espinho e
              S. M. Feira. Alia o que de melhor tem a tradição às exigências do
              mundo atual
            </span>
            <span>.</span>
            <br></br>
          </span>
        </div>
        <div className="home-servios card-content">
          <h1 className="home-text11">Actividade</h1>
          <span className="home-text12">
            Na Correia de Castro Advogados temos uma equipa especializada em
            diversas áreas para lhe prestar todo o apoio que necessita.
          </span>
          <Servicos></Servicos>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
