import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Book from '../components/Book';
import sortBy from 'sort-by';

class ListBooks extends Component {
  state = {
    query: ''
  }

  render() {
    const { books, shelfName, onMoveTo } = this.props;
    const { query } = this.state;
    
    let filteredBooks;

    if (shelfName === "all") {
      filteredBooks = books;
    } else {
      filteredBooks = books.filter((book) => book.shelf === shelfName)
    }

    if (query) {
      filteredBooks.sort(sortBy('title'));
    }

    return(
      <div>
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <Grid container spacing={16} justify="center"> 
        {filteredBooks.length ? filteredBooks
          .map(book => (
            <Grid item xs={6} sm={2} key={book.id}>
                <Book
                  book={book}
                  onMoveTo={onMoveTo}/>
            </Grid>
        )) : <div>Books not found!</div> }
        </Grid>
      </div>
    )
  }
}

ListBooks.defaultProps = {
  shelfName: 'all'
}

export default ListBooks;