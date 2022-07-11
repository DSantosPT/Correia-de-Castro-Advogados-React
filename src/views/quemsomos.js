import React from 'react'

import { Helmet } from 'react-helmet'

import Hero from '../components/hero'
import MemberDetails from '../components/member-details'
import TeamElement from '../components/team-element'
import Footer from '../components/footer'
import './quemsomos.css'

const Quemsomos = (props) => {
  return (
    <div className="quemsomos-container">
      <Helmet>
        <title>Quem somos - Correia de Castro Advogados</title>
        <meta
          property="og:title"
          content="Quem somos - Correia de Castro Advogados"
        />
      </Helmet>
      <Hero heading="Quem Somos" rootClassName="hero-root-class-name"></Hero>
      <div className="quemsomos-container01 card">
        <div className="quemsomos-container02 card-content">
          <div className="quemsomos-container03">
            <a href="#member1" className="quemsomos-link">
              <div className="quemsomos-container04">
                <MemberDetails
                  image_src="/playground_assets/team1-400h.jpg"
                  rootClassName="member-details-root-class-name1"
                ></MemberDetails>
              </div>
            </a>
          </div>
          <div className="quemsomos-container05">
            <a href="#member2" className="quemsomos-link1">
              <div className="quemsomos-container06">
                <MemberDetails image_src="/playground_assets/team2-200h.jpg"></MemberDetails>
              </div>
            </a>
          </div>
          <div className="quemsomos-container07">
            <a href="#member3" className="quemsomos-link2">
              <div className="quemsomos-container08">
                <MemberDetails image_src="/playground_assets/team6-400h.jpg"></MemberDetails>
              </div>
            </a>
          </div>
        </div>
        <div className="quemsomos-container09">
          <div id="member1" className="quemsomos-container10">
            <TeamElement
              Imagem="/playground_assets/team1-400h.jpg"
              rootClassName="team-element-root-class-name"
            ></TeamElement>
          </div>
          <div id="member2" className="quemsomos-container11">
            <TeamElement rootClassName="team-element-root-class-name1"></TeamElement>
          </div>
          <div id="member3" className="quemsomos-container12">
            <TeamElement
              Imagem="/playground_assets/team6-400h.jpg"
              rootClassName="team-element-root-class-name2"
            ></TeamElement>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Quemsomos
