import React from 'react'

import PropTypes from 'prop-types'

import ServicoImg from './servico-img'
import './servicos.css'

const Servicos = (props) => {
  return (
    <div className={`servicos-container ${props.rootClassName} `}>
      <div className="servicos-container1">
        <ServicoImg
          link="/servicos#contencioso-juridico"
          text="Contencioso Jurídico"
          image_src="https://images.unsplash.com/photo-1555374018-13a8994ab246?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGp1c3RpY2UlMjBoYW1tZXJ8ZW58MHx8fHwxNjU2OTYxNTQx&amp;ixlib=rb-1.2.1&amp;w=1500"
          rootClassName="servico-img-root-class-name"
          className=""
        ></ServicoImg>
        <ServicoImg
          link="/servicos#imobiliario-e-arrendamento"
          text="Imobiliário e Arrendamento"
          image_src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGJ1aWxkaW5nfGVufDB8fHx8MTY1Njg1OTIzMQ&amp;ixlib=rb-1.2.1&amp;w=1400"
          rootClassName="servico-img-root-class-name1"
          className=""
        ></ServicoImg>
        <ServicoImg
          link="/servicos#penal-contraordenacional-compliance"
          text="Penal, Contra- ordenacional e Compliance"
          image_src="https://images.unsplash.com/photo-1587740896339-96a76170508d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGp1c3RpY2V8ZW58MHx8fHwxNjU2ODgxOTAw&amp;ixlib=rb-1.2.1&amp;w=1400"
          rootClassName="servico-img-root-class-name2"
          className=""
        ></ServicoImg>
        <ServicoImg
          link="/servicos#societario-comercial"
          text="Societário e Comercial"
          image_src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxtb25leXxlbnwwfHx8fDE2NTY4ODE5NTM&amp;ixlib=rb-1.2.1&amp;w=1400"
          rootClassName="servico-img-root-class-name3"
          className=""
        ></ServicoImg>
        <ServicoImg
          link="/servicos#familia-menores-sucessoes"
          text="Família, Menores e Sucessões"
          image_src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxmYW1pbHl8ZW58MHx8fHwxNjU2ODgxOTg5&amp;ixlib=rb-1.2.1&amp;w=1400"
          rootClassName="servico-img-root-class-name5"
          className=""
        ></ServicoImg>
        <ServicoImg
          link="/servicos#trabalho"
          text="Trabalho"
          image_src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHdvcmt8ZW58MHx8fHwxNjU2ODgyMDMw&amp;ixlib=rb-1.2.1&amp;w=1400"
          rootClassName="servico-img-root-class-name6"
          className=""
        ></ServicoImg>
        <ServicoImg
          link="/servicos#registos-notariado"
          text="Registos e Notariado"
          image_src="https://images.unsplash.com/photo-1556741533-411cf82e4e2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fHJlZ2lzdGVyfGVufDB8fHx8MTY1Njg4MjA2Mg&amp;ixlib=rb-1.2.1&amp;w=1400"
          rootClassName="servico-img-root-class-name7"
          className=""
        ></ServicoImg>
      </div>
    </div>
  )
}

Servicos.defaultProps = {
  rootClassName: '',
}

Servicos.propTypes = {
  rootClassName: PropTypes.string,
}

export default Servicos
