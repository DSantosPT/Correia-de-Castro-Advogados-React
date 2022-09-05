import React from 'react'

import PropTypes from 'prop-types'

import Servicos from './servicos'
import './page-sobre-nos.css'

const PageSobreNos = (props) => {
  return (
    <div className="page-sobre-nos-section1">
      <div className="card-content page-sobre-nos-sobre-ns">
        <span className="page-sobre-nos-text">
          <span>
            Escritório de raiz familiar desde 1987, exerce as suas funções,
            preferencialmente, nos concelhos de V. N. Gaia, Porto, Espinho e S.
            M. Feira. Alia o que de melhor tem a tradição às exigências do mundo
            atual
          </span>
          <span>.</span>
          <br></br>
        </span>
      </div>
      <div className="page-sobre-nos-servios card-content">
        <h1 className="page-sobre-nos-text4">{props.heading}</h1>
        <span className="page-sobre-nos-text5">{props.text}</span>
        <Servicos></Servicos>
      </div>
    </div>
  )
}

PageSobreNos.defaultProps = {
  text: 'Na Correia de Castro Advogados temos uma equipa especializada em diversas áreas para lhe prestar todo o apoio que necessita.',
  heading: 'Actividade',
}

PageSobreNos.propTypes = {
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default PageSobreNos
