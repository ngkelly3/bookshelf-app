import React, { Component } from 'react';
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
    })
  }

  render() {
    return (
      <div className="App">
        <div className="list-books-title">
          <h1>My Bookshelf</h1>
        </div>
        <div className='list-books-content'>
          <ListBooks books={this.state.books} shelf={'currentlyReading'} />
          <ListBooks books={this.state.books} shelf={'wantToRead'} />
          <ListBooks books={this.state.books} shelf={'read'} />
        </div>
      </div>
    );
  }
}

export default App;
