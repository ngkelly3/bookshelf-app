import React, { Component } from 'react'
import ListBooks from './ListBooks'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

const ListQuery = (props) => {

  // static propTypes = {
  //   books: PropTypes.array.isRequired
  // }

  // props destructuring
  const { books, updateBooks } = props;
  // represents the books of the current shelf
  return(
    <ListBooks books={ books } updateBooks={ updateBooks }/>
  )

}

export default ListQuery
