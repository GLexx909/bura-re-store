import React from "react";
import { BookstoreServiceConsumer } from "../bookstore-service-contex"; // Чтобы получить доступ к сервису.

// Нужно для того, чтоб любой компонент смог получить bookstoreService из контекста.

const withBookstoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            <Wrapped {...props} bookstoreService={bookstoreService}/>
          }
        }
      </BookstoreServiceConsumer>
    );
  }
};

export default withBookstoreService;
