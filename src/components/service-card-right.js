import React from 'react'

import PropTypes from 'prop-types'

import './service-card-right.css'

const ServiceCardRight = (props) => {
  return (
    <div
      className={`service-card-right-container card ${props.rootClassName} `}
    >
      <div className="service-card-right-container1">
        <div className="service-card-right-container2 card-content">
          <h3 className="service-card-right-text Healine">{props.Area}</h3>
          <span className="service-card-right-text1">{props.Descricao}</span>
        </div>
        <img
          alt="image"
          src={props.Imagem}
          className="service-card-right-image"
        />
      </div>
    </div>
  )
}

ServiceCardRight.defaultProps = {
  Area: 'Área',
  Imagem: '',
  rootClassName: '',
  Descricao: 'Descrição da área',
}

ServiceCardRight.propTypes = {
  Area: PropTypes.string,
  Imagem: PropTypes.string,
  rootClassName: PropTypes.string,
  Descricao: PropTypes.string,
}

export default ServiceCardRight
