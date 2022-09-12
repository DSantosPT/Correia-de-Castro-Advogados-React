import React from 'react'

import PropTypes from 'prop-types'

import Servicos from './servicos'
import './page-actividade.css'

const PageActividade = (props) => {
  return (
    <div className={`page-actividade-container ${props.rootClassName} `}>
      <div className="page-actividade-container1 card-content">
        <Servicos
          rootClassName="servicos-root-class-name"
          className=""
        ></Servicos>
      </div>
    </div>
  )
}

PageActividade.defaultProps = {
  rootClassName: '',
}

PageActividade.propTypes = {
  rootClassName: PropTypes.string,
}

export default PageActividade
