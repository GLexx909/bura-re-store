// Позволит передать наш сервис всем компонентам в нашем приложении используя context api Реакта

import React from "react";

const {
  Provider: BookstoreServiceProvider,
  Consumer: BookstoreServiceConsumer
} = React.createContext();

export {
  BookstoreServiceProvider,
  BookstoreServiceConsumer
}
