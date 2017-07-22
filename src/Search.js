import React from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
    return(
        <div className='search-books'>
          <div className='search-books-bar'>
            <Link to="/" className='close-search'>Back to Main Page</Link>
            <p>Search Page</p>
          </div>
        </div>
    )
}

export default Search
