import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import ContactLinks from './contact-links'
import './footer.css'

const Footer = (props) => {
  return (
    <div id="footer" className={`footer-container ${props.rootClassName} `}>
      <div className="footer-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="footer-image"
        />
        <ContactLinks
          rootClassName="contact-links-root-class-name"
          className=""
        ></ContactLinks>
        <div className="footer-container2">
          <Link to="/" className="footer-navlink">
            Início
          </Link>
          <Link to="/pessoas" className="footer-navlink1">
            Quem Somos
          </Link>
          <Link to="/servicos" className="footer-navlink2">
            Serviços
          </Link>
          <Link to="/contactos" className="footer-navlink3">
            Contactos
          </Link>
        </div>
      </div>
      <div className="footer-container3"></div>
      <span className="footer-text textSM">
        <span className="">Copyright © 2022 Correia de Castro Advogados</span>
      </span>
    </div>
  )
}

Footer.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Footer.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default Footer
