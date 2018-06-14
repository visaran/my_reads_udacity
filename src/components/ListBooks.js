import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Book from '../components/Book';

class ListBooks extends Component {
  render() {
    return(
      <div>
        <Grid container spacing={16} justify="center">
          <Grid item xs={6} sm={3}>
            <Book />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default ListBooks;