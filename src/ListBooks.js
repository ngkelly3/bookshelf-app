import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    query: ''

  }

  render() {
    // props destructuring
    const { books } = this.props;
    console.log(books);

    return(
      <div className='list-books-content'>
        <ol className='books-grid'>
          {books.map((book) => (
            <li key={book.id} className='book'>
              <div className='book-top' style={{
                backgroundImage: `url(${book.imageLinks.thumbnail})`
              }}/>
              <div className='book-title'>
                <h4>{book.title}</h4>
                <p className='book-authors'>{book.authors[0]}</p>
              </div>
            </li>
          ))}
        </ol>

      </div>

    )

  }

}

export default ListBooks
