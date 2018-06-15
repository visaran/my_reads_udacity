import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Book from '../components/Book';

class ListBooks extends Component {
  render() {
    const { books, shelfName } = this.props;
    return(
      <div>
        <Grid container spacing={16} justify="center">
        {books
          .filter((book) => book.shelf === shelfName)
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