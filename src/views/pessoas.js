import React from 'react'

import { Helmet } from 'react-helmet'

import Hero from '../components/hero'
import MemberDetails from '../components/member-details'
import TeamElement from '../components/team-element'
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
      <div className="pessoas-container01 card">
        <div className="pessoas-container02 card-content">
          <div className="pessoas-container03">
            <a href="#member1" className="pessoas-link">
              <div className="pessoas-container04">
                <MemberDetails
                  image_src="/playground_assets/team1-400h.jpg"
                  rootClassName="member-details-root-class-name1"
                ></MemberDetails>
              </div>
            </a>
          </div>
          <div className="pessoas-container05">
            <a href="#member2" className="pessoas-link1">
              <div className="pessoas-container06">
                <MemberDetails image_src="/playground_assets/team2-200h.jpg"></MemberDetails>
              </div>
            </a>
          </div>
          <div className="pessoas-container07">
            <a href="#member3" className="pessoas-link2">
              <div className="pessoas-container08">
                <MemberDetails image_src="/playground_assets/team6-400h.jpg"></MemberDetails>
              </div>
            </a>
          </div>
        </div>
        <div className="pessoas-container09">
          <div id="member1" className="pessoas-container10">
            <TeamElement
              Nome="Correia de Castro"
              Cargo="Licenciado em Direito pela Faculdade de Direito da Universidade de Coimbra"
              Imagem="/playground_assets/team1-400h.jpg"
              Formacao="Inscrito na Ordem dos Advogados Portugueses desde 1986."
              Descricao="Advogado com experiência na “barra” dos Tribunais, no campo cível e comercial. Integrou instrução de processos da L.F.P.F. e Contencioso de Acidentes de Viação."
              rootClassName="team-element-root-class-name"
            >
              <div className="pessoas-container11">
                <ul className="list">
                  <li className="list-item">
                    <span>
                      {' '}
                      Licenciado em Direito pela Faculdade de Direito da
                      Universidade de Coimbra
                    </span>
                  </li>
                  <li className="list-item">
                    <span>
                      Inscrito na Ordem dos Advogados Portugueses desde 1986.
                    </span>
                  </li>
                  <li className="list-item">
                    <span>
                      Advogado com experiência na “barra” dos Tribunais, no
                      campo cível e comercial.
                    </span>
                  </li>
                  <li className="list-item">
                    <span>
                      Integrou instrução de processos da L.F.P.F. e Contencioso
                      de Acidentes de Viação.
                    </span>
                  </li>
                </ul>
              </div>
            </TeamElement>
          </div>
          <div id="member2" className="pessoas-container12">
            <TeamElement
              Nome="Jorge Correia de Castro"
              Cargo="Licenciado em Direito pela Faculdade de Direito da Universidade de Coimbra."
              Imagem="/playground_assets/team1-400h.jpg"
              Descricao="Licenciado em Direito pela Faculdade de Direito da Universidade de Coimbra.  Mestre em Ciências Jurídico-Forenses pela Faculdade de Direito da Universidade de Coimbra  Pós graduado Direito Fiscal das Empresas pela Faculdade de Direito da Universidade de Coimbra  Pós graduado em Organização e Gestão de Futebol Profissional pela Escola de Direito da Universidade Católica Portuguesa- Porto.  Integra o escritório do Dr. Correia de Castro desde 2017 "
              rootClassName="team-element-root-class-name1"
            >
              <div className="pessoas-container13">
                <ul className="list">
                  <li className="list-item">
                    <span>
                      {' '}
                      Licenciado em Direito pela Faculdade de Direito da
                      Universidade de Coimbra.
                    </span>
                  </li>
                  <li className="list-item">
                    <span>
                      Mestre em Ciências Jurídico-Forenses pela Faculdade de
                      Direito da Universidade de Coimbra
                    </span>
                  </li>
                  <li className="list-item">
                    <span>
                      Pós graduado Direito Fiscal das Empresas pela Faculdade de
                      Direito da Universidade de Coimbra
                    </span>
                  </li>
                  <li className="list-item">
                    <span>
                      Pós graduado em Organização e Gestão de Futebol
                      Profissional pela Escola de Direito da Universidade
                      Católica Portuguesa- Porto.
                    </span>
                  </li>
                  <li className="list-item">
                    <span>
                      Integra o escritório do Dr. Correia de Castro desde 2017
                    </span>
                  </li>
                </ul>
              </div>
            </TeamElement>
          </div>
          <div id="member3" className="pessoas-container14">
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

export default Pessoas
