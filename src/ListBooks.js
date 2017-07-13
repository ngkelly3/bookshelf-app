import React, { Component } from 'react'

class ListBooks extends Component {

  state = {
    query: ''

  }

  render() {
    console.log(this.props);
    return(
      <div>
        <h3>This is a test</h3>
      </div>

    )

  }

}

export default ListBooks
