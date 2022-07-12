import React from 'react'

import PropTypes from 'prop-types'

import FormInput from './form-input'
import FormTextarea from './form-textarea'
import './contact-form.css'

const ContactForm = (props) => {
  return (
    <div className="card-content">
      <form
        id="contact-form"
        action="https://getform.io/f/eaf82634-08d9-4b47-8d4c-1e1ce820a8ab"
        method="POST"
        className="contact-form-form"
      >
        <h1 className="contact-form-text">Deixe-nos a sua mensagem</h1>
        <span className="contact-form-text1 textXL">
          Por favor, preencha o formulário abaixo
        </span>
        <FormInput
          text="NOME"
          placeholder="Introduza o seu nome"
          className=""
        ></FormInput>
        <FormInput
          text="CONTACTO"
          placeholder="Introduza o seu contacto (email / telemóvel)"
          className=""
        ></FormInput>
        <FormInput
          text="ASSUNTO"
          placeholder="Introduza o assunto"
          className=""
        ></FormInput>
        <FormTextarea
          rootClassName="form-textarea-root-class-name"
          className=""
        ></FormTextarea>
        <div className="contact-form-container">
          <button type="submit" className="contact-form-button button textXS">
            <span onClick={props.submitForm} className="">
              <span className="">Enviar</span>
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

ContactForm.defaultProps = {
  submitForm: () => {},
  rootClassName: '',
}

ContactForm.propTypes = {
  submitForm: PropTypes.func,
  rootClassName: PropTypes.string,
}

export default ContactForm
