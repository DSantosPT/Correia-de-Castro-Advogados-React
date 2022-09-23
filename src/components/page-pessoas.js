import React from 'react'

import PropTypes from 'prop-types'

import TeamElement from './team-element'
import './page-pessoas.css'

const PagePessoas = (props) => {
  return (
    <div className={`page-pessoas-container ${props.rootClassName} `}>
      <div className="page-pessoas-container1">
        <div id="member1" className="page-pessoas-container2">
          <TeamElement
            Nome="Correia de Castro"
            Cargo="Licenciado em Direito pela Faculdade de Direito da Universidade de Coimbra"
            Imagem="https://images2.imgbox.com/0a/a6/a2bHpYn4_o.jpeg"
            Formacao="Inscrito na Ordem dos Advogados Portugueses desde 1986."
            Descricao="Advogado com experiência na “barra” dos Tribunais, no campo cível e comercial. Integrou instrução de processos da L.F.P.F. e Contencioso de Acidentes de Viação."
            rootClassName="team-element-root-class-name"
            className=""
          >
            <div className="page-pessoas-container3">
              <ul className="page-pessoas-ul list">
                <li className="list-item">
                  <span className="page-pessoas-text textMD">
                    {' '}
                    Licenciado em Direito pela Faculdade de Direito da
                    Universidade de Coimbra
                  </span>
                </li>
                <li className="list-item">
                  <span className="page-pessoas-text1 textMD">
                    Inscrito na Ordem dos Advogados Portugueses desde 1986.
                  </span>
                </li>
                <li className="list-item">
                  <span className="page-pessoas-text2 textMD">
                    Advogado com experiência na “barra” dos Tribunais, no campo
                    cível e comercial.
                  </span>
                </li>
                <li className="list-item">
                  <span className="page-pessoas-text3 textMD">
                    Integrou instrução de processos da L.F.P.F. e Contencioso de
                    Acidentes de Viação.
                  </span>
                </li>
              </ul>
            </div>
          </TeamElement>
        </div>
        <div id="member2" className="page-pessoas-container4">
          <TeamElement
            Nome="Jorge Correia de Castro"
            Cargo="Licenciado em Direito pela Faculdade de Direito da Universidade de Coimbra."
            Imagem="https://images2.imgbox.com/e6/51/cCWfaodh_o.jpeg"
            Descricao="Licenciado em Direito pela Faculdade de Direito da Universidade de Coimbra.  Mestre em Ciências Jurídico-Forenses pela Faculdade de Direito da Universidade de Coimbra  Pós graduado Direito Fiscal das Empresas pela Faculdade de Direito da Universidade de Coimbra  Pós graduado em Organização e Gestão de Futebol Profissional pela Escola de Direito da Universidade Católica Portuguesa- Porto.  Integra o escritório do Dr. Correia de Castro desde 2017 "
            rootClassName="team-element-root-class-name1"
            className=""
          >
            <div className="page-pessoas-container5">
              <ul className="page-pessoas-ul1 list">
                <li className="list-item">
                  <span className="page-pessoas-text4 textMD">
                    {' '}
                    Licenciado em Direito pela Faculdade de Direito da
                    Universidade de Coimbra.
                  </span>
                </li>
                <li className="list-item">
                  <span className="page-pessoas-text5 textMD">
                    Mestre em Ciências Jurídico-Forenses pela Faculdade de
                    Direito da Universidade de Coimbra
                  </span>
                </li>
                <li className="list-item">
                  <span className="page-pessoas-text6 textMD">
                    Pós graduado em Direito Fiscal das Empresas pela Faculdade
                    de Direito da Universidade de Coimbra
                  </span>
                </li>
                <li className="list-item">
                  <span className="page-pessoas-text7 textMD">
                    Pós graduado em Organização e Gestão de Futebol Profissional
                    pela Escola de Direito da Universidade Católica Portuguesa -
                    Porto.
                  </span>
                </li>
                <li className="list-item">
                  <span className="page-pessoas-text8 textMD">
                    Integra o escritório do Dr. Correia de Castro desde 2017
                  </span>
                </li>
              </ul>
            </div>
          </TeamElement>
        </div>
      </div>
    </div>
  )
}

PagePessoas.defaultProps = {
  rootClassName: '',
}

PagePessoas.propTypes = {
  rootClassName: PropTypes.string,
}

export default PagePessoas
