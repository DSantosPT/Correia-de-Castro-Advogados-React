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
      <div className="quemsomos-content">
        <div className="quemsomos-icon">
          <svg viewBox="0 0 1152 1024" className="quemsomos-icon1">
            <path d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
            <path d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"></path>
          </svg>
        </div>
        <div className="quemsomos-container01">
          <div className="quemsomos-container02">
            <div className="quemsomos-container03">
              <a href="#member1" className="quemsomos-link">
                <div className="quemsomos-container04">
                  <MemberDetails
                    image_src="/playground_assets/team1-200h.jpg"
                    rootClassName="member-details-root-class-name1"
                  ></MemberDetails>
                </div>
              </a>
              <a href="#member2" className="quemsomos-link1">
                <div className="quemsomos-container05">
                  <MemberDetails
                    heading1="Romina Hadid"
                    heading11="Marketing Specialist"
                    image_src="/playground_assets/team2-200h.jpg"
                  ></MemberDetails>
                </div>
              </a>
              <a href="#member3" className="quemsomos-link2">
                <div className="quemsomos-container06">
                  <MemberDetails
                    heading1="Alexa Smith"
                    heading11="UI/UX Designer"
                    image_src="/playground_assets/team6-200h.jpg"
                  ></MemberDetails>
                </div>
              </a>
            </div>
            <div className="quemsomos-container07">
              <div id="member1" className="quemsomos-container08">
                <TeamElement rootClassName="team-element-root-class-name2"></TeamElement>
              </div>
              <div id="member2" className="quemsomos-container09">
                <TeamElement rootClassName="team-element-root-class-name"></TeamElement>
              </div>
              <div id="member3" className="quemsomos-container10">
                <TeamElement rootClassName="team-element-root-class-name1"></TeamElement>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Quemsomos
