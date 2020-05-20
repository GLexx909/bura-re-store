import React from "react";
import './app.css'
import { withBookstoreService } from '../hoc';

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());
  return <div>App</div>
};

//после этого в нашем компоненте App сможет появиться prop bookstoreService
export default withBookstoreService()(App);
