import React from 'react';
import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      {/* para que todo lo que registremos en nuestro reducers y functiones para que esten disponible  en todo el proyecto */}
      <Provider store={store}>
        {/* el header va estar en todas las paginas */}
        <Header />
        <div className="container mt-5">
          {/* lo que esta en el switch es lo que se va a mostrar en en su direccion exacta */}
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route exact path="/productos/editar/:id" component={EditarProducto} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
