import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/Home/App'
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={() => <p>Página 404</p>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

