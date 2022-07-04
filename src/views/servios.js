import React from 'react'

import { Helmet } from 'react-helmet'

import Hero from '../components/hero'
import ServiceCardLeft from '../components/service-card-left'
import ServiceCardRight from '../components/service-card-right'
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
      <div className="servios-container01 card">
        <div className="servios-container02 card-content">
          <span className="servios-text textXL">
            <span className="servios-text1">
              Abaixo pode ver em detalhe cada uma das áreas de serviço nas quais
              pode contar com a Correia de Castro Advogados
            </span>
          </span>
        </div>
      </div>
      <div className="servios-container03">
        <div id="contencioso-juridico" className="servios-container04">
          <ServiceCardLeft
            Area="Contencioso Jurídico"
            Imagem="https://images.unsplash.com/photo-1555374018-13a8994ab246?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGp1c3RpY2UlMjBoYW1tZXJ8ZW58MHx8fHwxNjU2OTYxNTQx&amp;ixlib=rb-1.2.1&amp;w=1500"
            rootClassName="service-card-left-root-class-name"
          ></ServiceCardLeft>
        </div>
        <div id="imobiliario-e-arrendamento" className="servios-container05">
          <ServiceCardRight
            Area="Imobiliário e Arrendamento"
            Imagem="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGJ1aWxkaW5nfGVufDB8fHx8MTY1Njg1OTIzMQ&amp;ixlib=rb-1.2.1&amp;w=1400"
            rootClassName="service-card-right-root-class-name"
          ></ServiceCardRight>
        </div>
        <div
          id="penal-contraordenacional-compliance"
          className="servios-container06"
        >
          <ServiceCardLeft
            Area="Penal, Contra-ordenacional e Compliance"
            Imagem="https://images.unsplash.com/photo-1587740896339-96a76170508d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGp1c3RpY2V8ZW58MHx8fHwxNjU2ODgxOTAw&amp;ixlib=rb-1.2.1&amp;w=1400"
            rootClassName="service-card-left-root-class-name1"
          ></ServiceCardLeft>
        </div>
        <div id="societario-comercial" className="servios-container07">
          <ServiceCardRight
            Area="Societário e Comercial"
            Imagem="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxtb25leXxlbnwwfHx8fDE2NTY4ODE5NTM&amp;ixlib=rb-1.2.1&amp;w=1400"
            rootClassName="service-card-right-root-class-name1"
          ></ServiceCardRight>
        </div>
        <div id="familia-menores-sucessoes" className="servios-container08">
          <ServiceCardLeft
            Area="Família, Menores e Sucessões"
            Imagem="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxmYW1pbHl8ZW58MHx8fHwxNjU2ODgxOTg5&amp;ixlib=rb-1.2.1&amp;w=1400"
            rootClassName="service-card-left-root-class-name2"
          ></ServiceCardLeft>
        </div>
        <div id="trabalho" className="servios-container09">
          <ServiceCardRight
            Area="Trabalho"
            Imagem="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHdvcmt8ZW58MHx8fHwxNjU2ODgyMDMw&amp;ixlib=rb-1.2.1&amp;w=1400"
            rootClassName="service-card-right-root-class-name2"
          ></ServiceCardRight>
        </div>
        <div id="registos-notariado" className="servios-container10">
          <ServiceCardLeft
            Area="Registos e Notariado"
            Imagem="https://images.unsplash.com/photo-1556741533-411cf82e4e2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fHJlZ2lzdGVyfGVufDB8fHx8MTY1Njg4MjA2Mg&amp;ixlib=rb-1.2.1&amp;w=1400"
            rootClassName="service-card-left-root-class-name3"
          ></ServiceCardLeft>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Servios
