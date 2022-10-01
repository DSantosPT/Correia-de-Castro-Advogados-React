import React from 'react'

import PropTypes from 'prop-types'

import Servicos from './servicos'
import './page-sobre-nos.css'

const PageSobreNos = (props) => {
  return (
    <div className={`page-sobre-nos-section1 ${props.rootClassName} `}>
      <div className="page-sobre-nos-sobre-ns card-content">
        <span className="page-sobre-nos-text">{props.text}</span>
      </div>
      <div className="page-sobre-nos-servios card-content">
        <h1 className="page-sobre-nos-text1">{props.heading}</h1>
        <span className="page-sobre-nos-text2">{props.text}</span>
        <Servicos className=""></Servicos>
      </div>
    </div>
  )
}

PageSobreNos.defaultProps = {
  rootClassName: '',
  text: 'Escritório de advogados com tradição familiar que exerce a sua função desde 1987 nos concelhos de V. N. Gaia, Porto, Espinho e S. M. Feira, conciliando a experiência com as novas exigências do mundo actual.',
  heading: 'Actividade',
}

PageSobreNos.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default PageSobreNos
