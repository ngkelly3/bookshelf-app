import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks'
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
    let index = tempBooks.findIndex((bookItem) => bookItem.id == book.id );

    // if the index is valid, change the state
    if (index != -1) {
      tempBooks[index].shelf = shelf;
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
                <ListBooks books={this.state.books} updateBooks={this.updateBooks} shelf={'currentlyReading'} />
                <ListBooks books={this.state.books} updateBooks={this.updateBooks} shelf={'wantToRead'} />
                <ListBooks books={this.state.books} updateBooks={this.updateBooks} shelf={'read'} />
              </div>
              <div className='open-search'>
                <a>SearchButton</a>
              </div>
              </div>
            )}
          />
        </div>
    );
  }
}

export default App;
