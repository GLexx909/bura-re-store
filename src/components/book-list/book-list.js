import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from 'react-redux'

import { withBookstoreService } from '../hoc'
import { booksLoaded } from "../../actions"; // Экшен-креэйтор
import { compose } from '../../utils'
import './book-list.css'

class BookList extends Component  {

  componentDidMount() {
    // Получение данных из сервиса (хранилища)
    const { bookstoreService } = this.props; // оно у нас есть из-за того, что мы обернули в withBookstoreService
    const data = bookstoreService.getBooks();

    // dispatch action to store, т.е. сразу передаёт полученные данные в Redux store
    // там внутри наш Редюсер получает команду "BOOKS_LOADED" и обновляет books
    // обновлённый список книг снова возвращается к нашиму компоненту BookList через mapStateToProps
    // и через render() отрисовывает данные.
    this.props.booksLoaded(data)
  }

  render() {
    const { books } = this.props;
    return (
      <ul>
        {
          books.map((book) => { // оно у нас есть из-за mapStateToProps
            return (
              <li key={book.id}><BookListItem book={book} /></li>
            )
          })
        }
      </ul>
    );
  }
}

// Эта функция говорит, что в наш компонент нужно передать свойсто books
const mapStateToProps = ({ books }) => {
  return { books }
}

const mapDispatchToProps = {
  booksLoaded
}

// connect конструкция уже будет знать о Redux store и сможет работать с ним
export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList)

// Вверху функция compose просто выполняет функцию визуального упрощения старого варианта, который приведён ниже.
// export default withBookstoreService()(
//   connect(mapStateToProps, mapDispatchToProps)(BookList)
// );



// Как только наш компонент загружается, происходит следующее:
// connect оборачивает наш BookList в компонент высшего порядка, который подключается к Redux store
// мы конфигурируем как именно происходит это подключение функциями mapStateToProps и mapDispatchToProps
// mapStateToProps говорит какие данные наш компонент хочет получить из Redux store
// mapDispatchToProps говорит какие действия захочет выполнить наш компонент, какие экшены он будет передавать с store.