import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className={`header-header ${props.rootClassName} `}>
      <div className="header-container">
        <Link to="/" className="header-navlink">
          <h1 className="header-heading">{props.heading1}</h1>
        </Link>
        <div className="header-container1">
          {props.children}
          <Link to="/" className="header-navlink1">
            Actividade
          </Link>
          <Link to="/pessoas" className="header-text">
            Pessoas
          </Link>
          <Link to="/contactos" className="header-navlink2">
            {props.link3}
          </Link>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  rootClassName: '',
  link_text: '',
  heading1: 'Correia de Castro Advogados',
  link3: 'Contactos',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  link_text: PropTypes.string,
  heading1: PropTypes.string,
  link3: PropTypes.string,
}

export default Header
