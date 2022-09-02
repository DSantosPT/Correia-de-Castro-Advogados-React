import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Actividade from './views/actividade'
import Pessoas from './views/pessoas'
import Home from './views/home'
import Contactos from './views/contactos'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Actividade} exact path="/servicos" />
        <Route component={Pessoas} exact path="/pessoas" />
        <Route component={Home} exact path="/" />
        <Route component={Contactos} exact path="/contactos" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
