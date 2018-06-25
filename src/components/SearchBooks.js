import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {DebounceInput} from 'react-debounce-input';
import ListBooks from './ListBooks';
import * as BooksAPI from '../BooksAPI';

class SearchBooks extends Component {
  state = {
    query: '',
    books: []
  }

  searchQuery = (query) => {
    BooksAPI.search(query).then((books) => {
      this.setState({ books });
    });
  }

  render() {
    const { query } = this.state;

    return(
        <div>
          <h2>Faça sua pesquisa</h2>
          <form className="search-form">
            <DebounceInput
              element={TextField}
              label="Search"
              placeholder="Search"
              value={query}
              minLength={3}
              debounceTimeout={300}
              onChange={event => this.searchQuery(event.target.value)} />
          </form>
          <ListBooks
            books={this.state.books}/>
        </div>
      
    )
  }
}

export default SearchBooks;