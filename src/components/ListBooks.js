import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Book from '../components/Book';

class ListBooks extends Component {
  render() {
    const { books, shelfName } = this.props;
    let filteredBooks;

    if (shelfName === "all") {
      filteredBooks = books;
    } else {
      filteredBooks = books.filter((book) => book.shelf === shelfName)
    }
    return(
      <div>
        <Grid container spacing={16} justify="center">
        {filteredBooks
          .map(book => (
            <Grid item xs={6} sm={2} key={book.id}>
                <Book 
                  book={book}/>       
            </Grid> 
        ))}
        </Grid>
      </div>
    )
  }
}

export default ListBooks;