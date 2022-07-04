import React from 'react'

import PropTypes from 'prop-types'

import './servico-img.css'

const ServicoImg = (props) => {
  return (
    <div className={`servico-img-container ${props.rootClassName} `}>
      <a href={props.link} className="">
        <div className="servico-img-container1">
          <img src={props.image_src} className="servico-img-image" />
          <div className="servico-img-container2">
            <span className="servico-img-text">{props.text}</span>
            <span className="servico-img-text1 textSM">Ver mais</span>
          </div>
        </div>
      </a>
    </div>
  )
}

ServicoImg.defaultProps = {
  link: '',
  text: 'Text',
  rootClassName: '',
  image_src: '',
}

ServicoImg.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default ServicoImg
