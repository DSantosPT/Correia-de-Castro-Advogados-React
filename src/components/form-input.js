import React from 'react'

import PropTypes from 'prop-types'

import './form-input.css'

const FormInput = (props) => {
  return (
    <div className="form-input-container">
      <span className="form-input-text textXS">{props.text}</span>
      <input
        type="text"
        name="Nome"
        placeholder={props.placeholder}
        className="form-input-textinput textSM input"
      />
    </div>
  )
}

FormInput.defaultProps = {
  text: 'NOME',
  placeholder: 'Introduza o seu nome',
}

FormInput.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
}

export default FormInput
