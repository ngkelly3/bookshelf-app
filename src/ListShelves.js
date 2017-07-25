import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class ListShelves extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBooks: PropTypes.func.isRequired
  }

  state = {
    shelf: ''
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
    const { books, updateBooks } = this.props;
    const { shelf } = this.state;

    // represents the books of the current shelf
    let thisBookShelf;

    // filter out those books which belong to the proper bookshelf
    if (books && shelf !== '') {
      thisBookShelf = books.filter((book) => book.shelf === this.props.shelf);
    } else {
      // this is for the search specifically.  We don't have any shelves, we want to keep the current state of the query
      thisBookShelf = books;
    }

    return(
          <div className='bookshelf'>
            <h2 className='bookshelf-title'>{shelf}</h2>
            <ListBooks updateBooks={ updateBooks } thisBookShelf={ thisBookShelf }/>
          </div>
    )
  }
}

export default ListShelves
