import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Book from '../components/Book';

class ListBooks extends Component {
  render() {
    return(
      <div>
        <Grid container spacing={16} justify="center">
        {this.props.books.map(book => (
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