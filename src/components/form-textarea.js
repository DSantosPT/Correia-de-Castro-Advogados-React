import React from 'react'

import PropTypes from 'prop-types'

import './form-textarea.css'

const FormTextarea = (props) => {
  return (
    <div className={`form-textarea-container ${props.rootClassName} `}>
      <span className="form-textarea-text textXS">{props.text}</span>
      <textarea
        cols="80"
        name="Mensagem"
        rows="6"
        placeholder={props.placeholder}
        className="form-textarea-textarea textSM textarea"
      ></textarea>
    </div>
  )
}

FormTextarea.defaultProps = {
  text: 'MENSAGEM',
  placeholder: 'Introduza a sua mensagem',
  rootClassName: '',
}

FormTextarea.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FormTextarea
