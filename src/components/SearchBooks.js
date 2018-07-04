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
    this.setState({query});
    BooksAPI.search(query).then((books) => {
      query && this.setState({ books })
    });
    
  }

  render() {
    const { query, books } = this.state;
    const { onMoveTo } = this.props;

    console.log(books);
    return(
        <div>
          <h2>Faça sua pesquisa</h2>
          <form className="search-form">
            <input
              type="text"
              value={query}
              onChange={event => this.searchQuery(event.target.value)} />
          </form>
          <ListBooks
            onMoveTo={onMoveTo}
            books={books}/>
        </div>
      
    )
  }
}

export default SearchBooks;