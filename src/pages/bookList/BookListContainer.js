import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'

class BookListContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      books: [{
        id: '1',
        title: 'A Guerra dos Tronos',
        author: 'RR Martin',
        category: 'Ficção',
        pages: 584
      }, {
        id: '2',
        title: 'Harry Potter e a Pedra Filosofal',
        author: 'JK Rowling',
        category: 'Ficção',
        pages: 320
      }, {
        id: '3',
        title: 'O Código Da Vinci',
        author: 'Dan Brown',
        category: 'Ficção',
        pages: 691
      }, {
        id: '4',
        title: 'O Livro dos Títulos',
        author: 'Pedro Cardoso',
        category: 'Romance',
        pages: 367
      }]
    }
  }

  render () {
    return (
      <BookList books={this.state.books} />
    )
  }
}

BookListContainer.propTypes = {
  user: PropTypes.object
}

export default BookListContainer
