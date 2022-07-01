import React from 'react'

import PropTypes from 'prop-types'

import './label.css'

const Label = (props) => {
  return (
    <div className={`label-container ${props.rootClassName} `}>
      <h6 className="label-text">{props.text}</h6>
    </div>
  )
}

Label.defaultProps = {
  text: 'Text',
  rootClassName: '',
}

Label.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Label
