import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class SearchBooks extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render() {
    const { query } = this.state;

    return(
        <div>
          <h2>Faça sua pesquisa</h2>
          <form className="search-form">
            <TextField
              value={query}
              label="Search"
              placeholder="Search"
              onChange={(event) => this.updateQuery(event.target.value)}>
            </TextField>
          </form>
        </div>
      
    )
  }
}

export default SearchBooks;