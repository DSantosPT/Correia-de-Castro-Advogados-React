import React from 'react'

import PropTypes from 'prop-types'

import './service-card-left.css'

const ServiceCardLeft = (props) => {
  return (
    <div className={`service-card-left-container card ${props.rootClassName} `}>
      <div className="service-card-left-container1">
        <img
          alt="image"
          src={props.Imagem}
          className="service-card-left-image"
        />
        <div className="service-card-left-container2 card-content">
          <h3 className="service-card-left-text healine">{props.Area}</h3>
          <span className="service-card-left-text1">{props.Descricao}</span>
        </div>
      </div>
    </div>
  )
}

ServiceCardLeft.defaultProps = {
  Area: 'Área',
  Imagem: '',
  Descricao: 'Descrição da área',
  rootClassName: '',
}

ServiceCardLeft.propTypes = {
  Area: PropTypes.string,
  Imagem: PropTypes.string,
  Descricao: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ServiceCardLeft
