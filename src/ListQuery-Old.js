import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class ListQuery extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired
  }

  handleShelfChange = (event, book) => {
    let shelf = event.target.value;
    // change
    BooksAPI.update(book, shelf).then(
      this.props.updateBooks(book, shelf)
    );
    console.log(shelf);
    // console.log(this.state.books);

  }


  render() {
    // props destructuring
    const { books } = this.props;

    // represents the books of the current shelf
    let thisBookShelf = books;

    return(
            <div className='bookshelf-books'>
              {
                (thisBookShelf !== undefined) ?
                  <ol className='books-grid'>
                    {thisBookShelf.map((book) => (
                      <li key={book.id}>
                        <div className='book'>
                          <div className='book-top'>
                          {
                            (book.imageLinks !== undefined) ?
                              <div className='book-cover' style={{
                                backgroundImage: `url(${book.imageLinks.thumbnail})`,
                                width: 128,
                                height: 192
                              }}/> : <div></div>
                          }
                            <div className='book-shelf-changer'>
                              <select value={book.shelf} onChange={(e) => this.handleShelfChange(e, book)}>
                                <option value='none' disabled>Move to...</option>
                                <option value='currentlyReading'>Currently Reading</option>
                                <option value='wantToRead'>Want to Read</option>
                                <option value='read'>Read</option>
                                <option value='none'>None</option>
                              </select>
                            </div>
                          </div>
                          <div className='book-title'>
                            <h5>{book.title}</h5>
                          </div>
                          {
                            (book.authors !== undefined) ?
                            <div className='book-authors'>
                              {book.authors.map((author) => (
                                <div className='book-authors' key={author.toString()}>{author}</div>
                              ))}
                            </div> : <div></div>
                          }
                        </div>
                      </li>
                    ))}
                  </ol> : <div></div>
              }
            </div>
    )

  }

}

export default ListQuery
