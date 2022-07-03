import React from 'react'

import PropTypes from 'prop-types'

import './contact-form.css'

const ContactForm = (props) => {
  return (
    <div className={`contact-form-contact ${props.rootClassName} `}>
      <form
        id="contact-form"
        action="https://getform.io/f/eaf82634-08d9-4b47-8d4c-1e1ce820a8ab"
        method="POST"
        className="contact-form-form card-content"
      >
        <h1 className="contact-form-text">{props.heading1}</h1>
        <span className="contact-form-text1 textXL">{props.text1}</span>
        <span className="contact-form-text2 textXS">{props.text2}</span>
        <input
          type="text"
          name="Nome"
          placeholder={props.textinput_placeholder}
          className="contact-form-textinput textSM input"
        />
        <span className="contact-form-text3 textXS">{props.text31}</span>
        <input
          type="text"
          name="Contacto"
          placeholder={props.textinput_placeholder1}
          className="contact-form-textinput1 textSM input"
        />
        <span className="contact-form-text4 textXS">{props.text4}</span>
        <input
          type="text"
          name="Assunto"
          placeholder={props.textinput_placeholder4}
          className="contact-form-textinput2 input textSM"
        />
        <span className="contact-form-text5 textXS">{props.text5}</span>
        <textarea
          cols="80"
          name="Mensagem"
          rows="6"
          placeholder={props.textarea_placeholder}
          className="contact-form-textarea textSM textarea"
        ></textarea>
        <button type="submit" className="contact-form-button button textXS">
          <span onClick={props.submitForm} className="">
            <span className="">Enviar</span>
          </span>
        </button>
      </form>
    </div>
  )
}

ContactForm.defaultProps = {
  text31: 'CONTACTO',
  text5: 'MENSAGEM',
  text3: 'CONTACTO',
  textinput_placeholder11: 'Introduza o seu contacto (email / telemóvel)',
  submitForm: () => {},
  heading1: 'Deixe-nos a sua mensagem',
  textarea_placeholder: 'Introduza a sua mensagem',
  text2: 'NOME',
  textinput_placeholder: 'Introduza o seu nome',
  text6: 'Enviar',
  textinput_placeholder4: 'Introduza o assunto',
  rootClassName: '',
  button: 'Button',
  text1: 'Por favor, preencha o formulário abaixo',
  textinput_placeholder1: 'Introduza o seu contacto (email / telemóvel)',
  text4: 'ASSUNTO',
}

ContactForm.propTypes = {
  text31: PropTypes.string,
  text5: PropTypes.string,
  text3: PropTypes.string,
  textinput_placeholder11: PropTypes.string,
  submitForm: PropTypes.func,
  heading1: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  text2: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text6: PropTypes.string,
  textinput_placeholder4: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  text1: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  text4: PropTypes.string,
}

export default ContactForm
