import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Servios from './views/servios'
import Quemsomos from './views/quemsomos'
import Home from './views/home'
import Contactos from './views/contactos'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Servios} path="/servicos" />
        <Route exact component={Quemsomos} path="/quemsomos" />
        <Route exact component={Home} path="/" />
        <Route exact component={Contactos} path="/contactos" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
