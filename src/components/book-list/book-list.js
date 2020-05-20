import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from 'react-redux'

import './book-list.css'

class BookList extends Component  {

  render() {
    const { books } = this.props;
    return (
      <ul>
        {
          books.map((book) => {
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

// Вся эта конструкция уже будет знать о Redux store и сможет работать с ним
export default connect(mapStateToProps)(BookList);
