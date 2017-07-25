import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ListShelves from './ListShelves'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css';

class App extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
  }

  updateBooks = (book, shelf) => {
    // store the current state in a temp variable
    let tempBooks = this.state.books;
    let index = tempBooks.findIndex((bookItem) => bookItem.id === book.id );

    // if the index is valid, change the state
    if (index !== -1) {
      tempBooks[index].shelf = shelf;
      this.setState( {
        books: tempBooks
      })
    } else {

      // if the book isn't found in the current shelf, then add the book to the state manually and change the state
      // this code should execute only if a book isn't already on the bookshelf
      book.shelf = shelf;
      tempBooks.push(book);
      this.setState( {
        books: tempBooks
      })
    }
  }

  render() {
    return (
        <div className="App">
          <Route path="/" exact render={() => (
              <div>
                <div className="list-books-title">
                  <h1>My Bookshelf</h1>
                </div>
                <div className='list-books-content'>
                  <ListShelves books={this.state.books} updateBooks={this.updateBooks} shelf={'currentlyReading'} />
                  <ListShelves books={this.state.books} updateBooks={this.updateBooks} shelf={'wantToRead'} />
                  <ListShelves books={this.state.books} updateBooks={this.updateBooks} shelf={'read'} />
                </div>
                <div className='open-search'>
                  <Link to="/search">Add a Book</Link>
                </div>
              </div>
            )}
          />
          <Route path="/search" render={({ history }) => (
              <Search mainBooks={this.state.books} updateBooks={this.updateBooks} />
            )}
          />
        </div>
    );
  }
}

export default App;
