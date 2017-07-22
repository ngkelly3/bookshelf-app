import React from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
    return(
        <div className='search-books'>
          <div className='search-books-bar'>
            <Link to="/" className='close-search'>Back to Main Page</Link>
            <div className='search-books-input-wrapper'>
              <input type="text" name="book" placeholder="Book Name"/>
            </div>
          </div>
        </div>
    )
}

export default Search
