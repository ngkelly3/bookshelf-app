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
    //console.log("Query when updateSearchedBooks is called:", this.state.query)

    // minimum search length is 3
    if (query.length > 0) {
      BooksAPI.search(query, 5).then((books) => {
          console.log(books)
          books.error ?
            this.setState( {bookResults:[]} ) : this.setState( {bookResults:books} )
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
            <ListQuery books={this.state.bookResults} updateBooks={this.props.updateBooks} />
          </div>
        </div>
    )
  }
}


export default Search
