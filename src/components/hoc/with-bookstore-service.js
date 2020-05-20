import React from "react";
import { BookstoreServiceConsumer } from "../bookstore-service-contex"; // Чтобы получить доступ к сервису.

// Нужно для того, чтоб любой компонент смог получить bookstoreService из контекста.

const withBookstoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            // bookstoreService вроде как имеется здесь, т.к. мы его в index.js запихнули в BookstoreServiceProvider
            // bookstoreService это данные с BD
            return (<Wrapped {...props} bookstoreService={bookstoreService}/>);
          }
        }
      </BookstoreServiceConsumer>
    );
  }
};

export default withBookstoreService;
