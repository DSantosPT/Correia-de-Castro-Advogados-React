import React from 'react'

import { Helmet } from 'react-helmet'

import Hero from '../components/hero'
import MemberDetails from '../components/member-details'
import TeamElement1 from '../components/team-element1'
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
          <a href="#member1">
            <div className="quemsomos-container03">
              <MemberDetails
                image_src="/playground_assets/team1-200h.jpg"
                rootClassName="member-details-root-class-name1"
              ></MemberDetails>
            </div>
          </a>
          <a href="#member2">
            <div className="quemsomos-container04">
              <MemberDetails
                heading1="Romina Hadid"
                heading11="Marketing Specialist"
                image_src="/playground_assets/team2-200h.jpg"
              ></MemberDetails>
            </div>
          </a>
          <a href="#member3">
            <div className="quemsomos-container05">
              <MemberDetails
                heading1="Alexa Smith"
                heading11="UI/UX Designer"
                image_src="/playground_assets/team6-200h.jpg"
              ></MemberDetails>
            </div>
          </a>
        </div>
        <div className="quemsomos-container06">
          <div id="member1" className="quemsomos-container07">
            <TeamElement1 rootClassName="team-element1-root-class-name"></TeamElement1>
          </div>
          <div id="member2" className="quemsomos-container08">
            <TeamElement1 rootClassName="team-element1-root-class-name1"></TeamElement1>
          </div>
          <div id="member3" className="quemsomos-container09">
            <TeamElement1 rootClassName="team-element1-root-class-name2"></TeamElement1>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Quemsomos
