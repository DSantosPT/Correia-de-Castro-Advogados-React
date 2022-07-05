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
            <span className="home-text1">
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
        <div className="card-content home-features">
          <h1 className="home-text4">
            <span>Serviços</span>
          </h1>
          <span className="home-text6">
            <span>
              Na Correia de Castro Advogados temos uma equipa especializada em
              diversas árias para lhe prestar todo o apoio que necessita.
            </span>
          </span>
          <Servicos></Servicos>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
