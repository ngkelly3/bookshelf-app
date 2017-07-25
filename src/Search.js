import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListQuery from './ListQuery'
import * as BooksAPI from './BooksAPI'


class Search extends Component {

  state = {
    bookResults: [],
    query: ''
  }

  handleChange = (value) => {
    console.log(value);
    this.setState({
      query: value
    });
    //console.log("Query after callback: ", this.state.query);
    this.updateSearchedBooks(value);
  }

  updateSearchedBooks = (query) => {

    if (query.length > 0) {
      BooksAPI.search(query, 1).then((books) => {
          //console.log(books)
          if (books.error) {
            this.setState( {bookResults:[]} )
          } else {
            // cross-references the queried result with current shelf and updates the state of the book
            books.map((book) => {
              this.props.mainBooks.map((mainBook) => {
                if (book.id === mainBook.id) {
                  book.shelf = mainBook.shelf;
                }
              })
            })
            this.setState( {bookResults:books} )
          }
        })
    } else {
      this.setState({ bookResults:[] })
    }

  }

  render() {
    return(
        <div className='search-books'>
          <div className='search-books-bar'>
            <Link to="/" className='close-search'>Back to Main Page</Link>
            <div className='search-books-input-wrapper'>
              <input type="text"
                name="book"
                value={this.state.query}
                onChange={(event) => this.handleChange(event.target.value)}
                placeholder="Search by title or author"
              />
            </div>
          </div>
          <div className='search-books-results'>
            <ListQuery books={this.state.bookResults} mainBooks={this.props.mainBooks} updateBooks={this.props.updateBooks} />
          </div>
        </div>
    )
  }
}


export default Search
