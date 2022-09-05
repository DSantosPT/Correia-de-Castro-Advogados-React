import React from 'react'

import PropTypes from 'prop-types'

import Servicos from './servicos'
import './page-actividade.css'

const PageActividade = (props) => {
  return (
    <div className={`page-actividade-container ${props.rootClassName} `}>
      <div className="page-actividade-container1 card-content">
        <span className="page-actividade-text textXL">{props.text}</span>
        <Servicos
          rootClassName="servicos-root-class-name"
          className=""
        ></Servicos>
      </div>
    </div>
  )
}

PageActividade.defaultProps = {
  text: 'Abaixo pode ver cada uma das áreas de serviço nas quais pode contar com a Correia de Castro Advogados',
  rootClassName: '',
}

PageActividade.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default PageActividade
