import React from 'react'

import PropTypes from 'prop-types'

import './form-input.css'

const FormInput = (props) => {
  return (
    <div className="form-input-container">
      <span className="form-input-text textXS">{props.text}</span>
      {props.children}
    </div>
  )
}

FormInput.defaultProps = {
  text: 'NOME',
}

FormInput.propTypes = {
  text: PropTypes.string,
}

export default FormInput
