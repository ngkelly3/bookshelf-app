import React from 'react'

const ListAuthors = ({book}) => {
    return(
        <div className='book-authors'>
          {book.authors.map((author) => (
            <p key={author.toString()}>{author}</p>
          ))}
        </div>
    )

}

export default ListAuthors
