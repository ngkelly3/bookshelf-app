import React from 'react'
import ListBooks from './ListBooks'
import PropTypes from 'prop-types'

const ListQuery = (props) => {
  
  // props destructuring
  const { books, updateBooks } = props;
  // represents the books of the current shelf
  return(
    <ListBooks updateBooks={ updateBooks } thisBookShelf={ books }/>
  )
}

ListQuery.proptypes = {
  books: PropTypes.array.isRequired,
  updateBooks: PropTypes.func.isRequired
}

export default ListQuery
