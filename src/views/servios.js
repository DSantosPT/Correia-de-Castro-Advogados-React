import React from 'react'

import { Helmet } from 'react-helmet'

import Hero from '../components/hero'
import ServiceCard from '../components/service-card'
import Footer from '../components/footer'
import './servios.css'

const Servios = (props) => {
  return (
    <div className="servios-container">
      <Helmet>
        <title>Serviços - Correia de Castro Advogados</title>
        <meta
          property="og:title"
          content="Serviços - Correia de Castro Advogados"
        />
      </Helmet>
      <Hero heading="Serviços" rootClassName="hero-root-class-name1"></Hero>
      <div className="card">
        <div className="servios-icon">
          <svg viewBox="0 0 1243.4285714285713 1024" className="servios-icon1">
            <path d="M987.429 256l-219.429 402.286h438.857zM256 256l-219.429 402.286h438.857zM725.143 146.286c-10.857 30.857-36 56-66.857 66.857v737.714h347.429c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-768c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h347.429v-737.714c-30.857-10.857-56-36-66.857-66.857h-280.571c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h280.571c15.429-42.857 55.429-73.143 103.429-73.143s88 30.286 103.429 73.143h280.571c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-280.571zM621.714 155.429c25.143 0 45.714-20.571 45.714-45.714s-20.571-45.714-45.714-45.714-45.714 20.571-45.714 45.714 20.571 45.714 45.714 45.714zM1243.429 658.286c0 117.714-162.857 164.571-256 164.571s-256-46.857-256-164.571v0c0-22.286 199.429-375.429 224-420 6.286-11.429 18.857-18.857 32-18.857s25.714 7.429 32 18.857c24.571 44.571 224 397.714 224 420v0zM512 658.286c0 117.714-162.857 164.571-256 164.571s-256-46.857-256-164.571v0c0-22.286 199.429-375.429 224-420 6.286-11.429 18.857-18.857 32-18.857s25.714 7.429 32 18.857c24.571 44.571 224 397.714 224 420z"></path>
          </svg>
        </div>
        <div className="servios-container1">
          <div className="servios-container2">
            <h6 className="servios-text textSM">
              <span>ON THE COASTLINE</span>
            </h6>
            <h3 className="servios-text2 healine">We are missing the summer</h3>
            <span className="servios-text3 textXL">
              <span className="servios-text4">
                We&apos;re waiting for the weather to warm up so that we can go
                to the coastline. We really miss the summertime, our second home
                the coastline.
              </span>
              <br></br>
            </span>
            <div className="servios-services">
              <ServiceCard></ServiceCard>
              <div className="servios-container3">
                <div className="servios-container4">
                  <svg viewBox="0 0 1024 1024" className="servios-icon3">
                    <path d="M832 192v-128h-640v128h-192v128c0 106.038 85.958 192 192 192 20.076 0 39.43-3.086 57.62-8.802 46.174 66.008 116.608 113.796 198.38 130.396v198.406h-64c-70.694 0-128 57.306-128 128h512c0-70.694-57.306-128-128-128h-64v-198.406c81.772-16.6 152.206-64.386 198.38-130.396 18.19 5.716 37.544 8.802 57.62 8.802 106.042 0 192-85.962 192-192v-128h-192zM192 436c-63.962 0-116-52.038-116-116v-64h116v64c0 40.186 7.43 78.632 20.954 114.068-6.802 1.246-13.798 1.932-20.954 1.932zM948 320c0 63.962-52.038 116-116 116-7.156 0-14.152-0.686-20.954-1.932 13.524-35.436 20.954-73.882 20.954-114.068v-64h116v64z"></path>
                  </svg>
                </div>
                <h1 className="servios-text5 textXL">Grow your market</h1>
                <span className="servios-text6">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </span>
              </div>
              <div className="servios-container5">
                <div className="servios-container6">
                  <svg viewBox="0 0 1024 1024" className="servios-icon5">
                    <path d="M726 726v-172h-86v172h86zM554 726v-428h-84v428h84zM384 726v-300h-86v300h86zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h596z"></path>
                  </svg>
                </div>
                <h1 className="servios-text7 textXL">Launch time</h1>
                <span className="servios-text8">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Servios
