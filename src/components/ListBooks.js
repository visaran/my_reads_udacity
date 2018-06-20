import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Book from '../components/Book';

class ListBooks extends Component {
  state = {
    query: ''
  }

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
        {filteredBooks.length && filteredBooks
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

ListBooks.defaultProps = {
  shelfName: 'all'
}

export default ListBooks;