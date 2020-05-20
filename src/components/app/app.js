import React from "react";
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';

import './app.css'

const App = () => {
  return (
    // Switch делает так, чтоб только один из внутренних роутов сработал
    <Switch>
      <Route
        path="/"
        component={HomePage}
        exact />

      <Route
        path="/cart"
        component={CartPage} />

    </Switch>
  )
};

//после этого в нашем компоненте App сможет появиться prop bookstoreService
export default App;
