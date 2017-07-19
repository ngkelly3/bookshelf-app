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
    });
  }

  updateBooks = () => {
    // BooksAPI.getAll().then((books) => {
    //   this.setState({ books })
    // });
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
    // console.log("books should be reset")
    // console.log(this.state.books)

  }

  render() {
    return (
      <div className="App">
        <div className="list-books-title">
          <h1>My Bookshelf</h1>
        </div>
        <div className='list-books-content'>
          <ListBooks books={this.state.books} updateBooks={this.updateBooks} shelf={'currentlyReading'} />
          <ListBooks books={this.state.books} updateBooks={this.updateBooks} shelf={'wantToRead'} />
          <ListBooks books={this.state.books} updateBooks={this.updateBooks} shelf={'read'} />
        </div>
      </div>
    );
  }
}

export default App;
