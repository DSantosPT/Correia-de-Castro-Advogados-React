import React from 'react'

import ServicoImg from './servico-img'
import './servicos.css'

const Servicos = (props) => {
  return (
    <div className="servicos-container">
      <div className="servicos-container1">
        <ServicoImg
          text="Contencioso Jurídico"
          rootClassName="servico-img-root-class-name"
          image_src="https://images.unsplash.com/photo-1544731612-de7f96afe55f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxjb21wdXRlcnxlbnwwfHx8fDE2NTY4NTkyMDk&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080"
          link="/servicos#footer"
        ></ServicoImg>
        <ServicoImg
          text="Imobiliário e Arrendamento"
          rootClassName="servico-img-root-class-name1"
          image_src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGJ1aWxkaW5nfGVufDB8fHx8MTY1Njg1OTIzMQ&amp;ixlib=rb-1.2.1&amp;w=1400"
        ></ServicoImg>
        <ServicoImg
          text="Penal, Contra- ordenancional e Compliance"
          rootClassName="servico-img-root-class-name2"
          image_src="https://images.unsplash.com/photo-1587740896339-96a76170508d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGp1c3RpY2V8ZW58MHx8fHwxNjU2ODgxOTAw&amp;ixlib=rb-1.2.1&amp;w=1400"
        ></ServicoImg>
        <ServicoImg
          text="Societário e Comercial"
          rootClassName="servico-img-root-class-name3"
          image_src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxtb25leXxlbnwwfHx8fDE2NTY4ODE5NTM&amp;ixlib=rb-1.2.1&amp;w=1400"
        ></ServicoImg>
      </div>
      <div className="servicos-container2">
        <ServicoImg
          text="Família, Menores e Sucessões"
          rootClassName="servico-img-root-class-name5"
          image_src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxmYW1pbHl8ZW58MHx8fHwxNjU2ODgxOTg5&amp;ixlib=rb-1.2.1&amp;w=1400"
        ></ServicoImg>
        <ServicoImg
          text="Trabalho"
          rootClassName="servico-img-root-class-name6"
          image_src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHdvcmt8ZW58MHx8fHwxNjU2ODgyMDMw&amp;ixlib=rb-1.2.1&amp;w=1400"
        ></ServicoImg>
        <ServicoImg
          text="Registos e Notariado"
          rootClassName="servico-img-root-class-name7"
          image_src="https://images.unsplash.com/photo-1556741533-411cf82e4e2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fHJlZ2lzdGVyfGVufDB8fHx8MTY1Njg4MjA2Mg&amp;ixlib=rb-1.2.1&amp;w=1400"
        ></ServicoImg>
      </div>
    </div>
  )
}

export default Servicos
