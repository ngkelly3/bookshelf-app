import React, { Component } from 'react'
import ListAuthors from './ListAuthors'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    shelf: '',
    query: ''
  }

  componentDidMount() {
    if (this.props.shelf === 'currentlyReading')
      this.setState({shelf: 'Currently Reading'})
    if (this.props.shelf === 'wantToRead')
      this.setState({shelf: 'Want To Read'})
    if (this.props.shelf === 'read')
      this.setState({shelf: 'Read'})
  }

  render() {
    // props destructuring
    const { books } = this.props;
    const { shelf } = this.state;

    // represents the books of the current shelf
    let thisBookShelf;

    // filter out those books which belong to the proper bookshelf
    if (books) {
      thisBookShelf = books.filter((book) => book.shelf === this.props.shelf);
    }

    console.log(thisBookShelf);

    return(
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{shelf}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {thisBookShelf.map((book) => (
              <li key={book.id}>
                <div className='book'>
                  <div className='book-top'>
                    <div className='book-cover' style={{
                      backgroundImage: `url(${book.imageLinks.thumbnail})`,
                      width: 138
                    }}/>
                    <div className='book-shelf-changer'>
                      <select>
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
                  <div className='book-authors'>
                    {book.authors.map((author) => (
                      <div className='book-authors' key={author.toString()}>{author}</div>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

    )

  }

}

export default ListBooks
