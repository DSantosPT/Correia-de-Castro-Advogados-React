import React from 'react'

import PropTypes from 'prop-types'

import './section-header.css'

const SectionHeader = (props) => {
  return (
    <div
      className={`section-header-sobre-ns card-content ${props.rootClassName} `}
    >
      <h1 className="section-header-text">{props.heading}</h1>
    </div>
  )
}

SectionHeader.defaultProps = {
  heading: '',
  rootClassName: '',
}

SectionHeader.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SectionHeader
