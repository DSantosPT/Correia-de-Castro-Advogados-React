import React from 'react'

import PropTypes from 'prop-types'

import './form-textarea.css'

const FormTextarea = (props) => {
  return (
    <div className={`form-textarea-container ${props.rootClassName} `}>
      <span className="form-textarea-text TextXS">{props.text}</span>
      <textarea
        cols="80"
        name="Mensagem"
        rows="6"
        placeholder={props.placeholder}
        className="form-textarea-textarea textarea TextSM"
      ></textarea>
    </div>
  )
}

FormTextarea.defaultProps = {
  placeholder: 'Introduza a sua mensagem',
  text: 'MENSAGEM',
  rootClassName: '',
}

FormTextarea.propTypes = {
  placeholder: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FormTextarea
