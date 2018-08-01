import React, { Component } from 'react';

import { Provider } from 'react-redux'
import store from './redux'

import { Header } from './components/Header';
import Table from './components/Table';
import NewTask from './components/NewTask';

import './css/Style.css'

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

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Header />

          <div className="content">

            <NewTask />
            <Table />
            <button className="btn-2">Marcar tudo como feito</button>

          </div>
        </div>
      </Provider>
    )
  }
}

export default App;
