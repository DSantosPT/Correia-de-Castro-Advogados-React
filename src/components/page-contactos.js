import React from 'react'

import PropTypes from 'prop-types'

import ContactLinks from './contact-links'
import Map from './map'
import ContactForm from './contact-form'
import './page-contactos.css'

const PageContactos = (props) => {
  return (
    <div className={`page-contactos-container ${props.rootClassName} `}>
      <div className="card-content">
        <h1 className="page-contactos-text">{props.heading}</h1>
        <ContactLinks
          rootClassName="contact-links-root-class-name1"
          className=""
        ></ContactLinks>
      </div>
      <Map rootClassName="map-root-class-name" className=""></Map>
      <ContactForm
        rootClassName="contact-form-root-class-name"
        className=""
      ></ContactForm>
    </div>
  )
}

PageContactos.defaultProps = {
  heading: 'Onde estamos',
  rootClassName: '',
}

PageContactos.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default PageContactos
