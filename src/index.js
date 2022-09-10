import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Actividade from './views/actividade'
import PolticaDePrivacidade from './views/poltica-de-privacidade'
import Pessoas from './views/pessoas'
import CorreiaDeCastroAdvogados from './views/correia-de-castro-advogados'
import Contactos from './views/contactos'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Actividade} exact path="/servicos" />
        <Route
          component={PolticaDePrivacidade}
          exact
          path="/politica-privacidade"
        />
        <Route component={Pessoas} exact path="/pessoas" />
        <Route component={CorreiaDeCastroAdvogados} exact path="/" />
        <Route component={Contactos} exact path="/contactos" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
