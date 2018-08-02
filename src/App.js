import React from 'react'

import { Provider } from 'react-redux'
import store from './redux'

import './css/Style.css'
import Home from './screens/Home'

import { NotificationContainer } from 'react-notifications'
import 'react-notifications/lib/notifications.css'

/**
 * Acompanhe as instruções do documento compartilhado com você.
 * Fique a vontade para usar a estrutura de pasta como quiser.
 * Atente-se ao uso correto de componentes stateless e stateful.
 *
 * A API a ser consumida é REST:
 *  GET    /          -> Traz todos os registros.
 *  GET    /:id       -> Traz o registro com o id (Int) selecionado.
 *  POST   /          -> Cria um novo registro. Formato: {"description": "Fazer café", "done": false}
 *  PUT    /:id       -> Atualiza o registro pelo id (Int), pode ser só o "done" ou o "description" também.
 *  DELETE /:id       -> Autoexplicativo :)
 *
 *
 * Boa sorte!
 */

const App = () =>
  <Provider store={store}>
    <div>
      <Home />
      <NotificationContainer />
    </div>
  </Provider>

export default App
