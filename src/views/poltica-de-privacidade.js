import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Hero from '../components/hero'
import PageSobreNos from '../components/page-sobre-nos'
import SectionHeader from '../components/section-header'
import Footer from '../components/footer'
import './poltica-de-privacidade.css'

const PolticaDePrivacidade = (props) => {
  return (
    <div className="poltica-de-privacidade-container">
      <Helmet>
        <title>Poltica-de-Privacidade - Correia de Castro Advogados</title>
        <meta
          name="description"
          content="Escritório de advogados com tradição familiar que exerce a sua função desde 1987 nos concelhos de V. N. Gaia, Porto, Espinho e S. M. Feira."
        />
        <meta
          property="og:title"
          content="Poltica-de-Privacidade - Correia de Castro Advogados"
        />
        <meta
          property="og:description"
          content="Escritório de advogados com tradição familiar que exerce a sua função desde 1987 nos concelhos de V. N. Gaia, Porto, Espinho e S. M. Feira."
        />
      </Helmet>
      <Hero
        heading="Política de Privacidade"
        rootClassName="hero-root-class-name4"
      ></Hero>
      <div className="poltica-de-privacidade-container1">
        <div className="poltica-de-privacidade-container2 card">
          <PageSobreNos text="Mercê do novo Regulamento Geral da Proteção de Dados, este escritório, ciente da importância que os dados pessoais assumem, adotou um conjunto de mecanismos destinado a salvaguardar os dados que nos são revelados."></PageSobreNos>
        </div>
        <div id="actividade" className="card">
          <SectionHeader
            heading="Termos de Privacidade"
            rootClassName="section-header-root-class-name5"
          ></SectionHeader>
          <PageSobreNos text="O utilizador quando usa os nossos serviços confia-nos informações pessoais. Esta Política de Privacidade destina-se a ajudar o utilizador a entender quais os dados que recolhemos, porque é que os recolhemos e os direitos que decorrem do novo regulamento de Proteção de dados. Ora, ao aceder e utilizar este Site e serviços que disponibiliza, o utilizador aceita e consente expressamente no processamento dos seus dados pessoais nos termos constantes desta Política de Privacidade. Este escritório de advogados não recolhe nem processa qualquer dado pessoal ou informação obtida através deste Site para efeitos de permitir a sua exploração, por qualquer forma, por terceiros. Na verdade, os dados que são recolhidos, mormente, o nome, o e-mail, o contacto telefónico são indispensáveis para as finalidades deste site que possibilita um pedido de informação. Para o efeito, a utilização do Site pressupõe que os Utilizadores conhecem e aceitam os termos e condições da presente Política de Privacidade. Este escritório obriga-se à segurança dos seus dados pessoais contra qualquer perda, destruição, alteração, acesso, ou utilização indevida ou não autorizada pugnando pelo cumprimento de todas as medidas legalmente exigidas pelo Regulamento. Assim, dispõe de medidas técnicas e organizativas que visam garantir a segurança da informação e protegê-la contra quaisquer atos deliberados ou acidentais que possam provocar a sua manipulação, destruição, perda ou utilização não autorizada. Paralelamente, o utilizador goza dos direitos de informação, acesso, retificação, oposição, apagamento, limitação e portabilidade dos seus dados pessoais. Para o exercício destes direitos, tem que apresentar tal pedido para o email abaixo indicado. O site poderá conter links outros websites geridos por servidores de terceiros, relativamente aos quais este escritório de advogados não tem qualquer controlo direto ou indireto. O Site utiliza “cookies” que servem para ajudar a determinar a utilidade, o interesse e o número de acessos ao website, permitindo uma navegação rápida e eficiente do mesmo, eliminando a necessidade de introduzir repetidamente as mesmas informações. Um cookie é um pequeno ficheiro com uma “lista” de carateres os quais são enviados para o seu computador quando visita um determinado website. Quando navega nesse website de novo, o cookie permite que o mesmo reconheça o seu navegador. Os cookies recolhem, portanto, informação sobre o seu dispositivo e informação sobre a sua experiência de utilização. Note que é possível repor o seu navegador para recusar todos os cookies ou indicar quando um cookie é enviado. No entanto, algumas funcionalidades ou serviços de websites podem não funcionar corretamente sem cookies. Para mais informações sobre a remoção dos cookies pode visitar www.aboutcookies.org. Refira-se, ainda, que este site se encontra em constante desenvolvimento no sentido de se tornar um instrumento útil ao utilizador e cumprir o objetivo que é informar e permitir o contacto à escala de um click. "></PageSobreNos>
          <div className="poltica-de-privacidade-container4">
            <Link to="/" className="poltica-de-privacidade-navlink">
              <PageSobreNos
                text="Voltar ao início"
                rootClassName="page-sobre-nos-root-class-name"
                className="poltica-de-privacidade-component4"
              ></PageSobreNos>
            </Link>
          </div>
        </div>
        <Footer>
          <Link to="/" className="poltica-de-privacidade-navlink1">
            Início
          </Link>
        </Footer>
      </div>
    </div>
  )
}

export default PolticaDePrivacidade
