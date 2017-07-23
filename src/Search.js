import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class Search extends Component {

  state = {
    books: [],
    query: ''
  }

  handleChange = (value) => {
    this.setState({
      query: value.trim()
    })
    //console.log(this.state.query);
    this.updateSearchedBooks();
  }

  updateSearchedBooks = () => {

    // minimum search length is 3
    if (this.state.query.length >= 3) {
      BooksAPI.search(this.state.query, 10).then((books) => {
          this.setState({books})
        })
    }
    //console.log(this.state.books);
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
            <h1>List Books Component?</h1>
          </div>
        </div>
    )
  }
}


export default Search
