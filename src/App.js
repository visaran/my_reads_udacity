import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Header from './layout/Header';
import ListBooks from './components/ListBooks';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class BooksApp extends Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState({ books })
    })
  }

  render() {

    return (
      <CssBaseline>
        <div className="app">
          <Header
            title="MyReads"/>
          <div className="container">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <ListBooks
              books={this.state.books}/>

            <h2 className="bookshelf-title">Want to Read</h2>
            <ListBooks
              books={this.state.books}/>

            <h2 className="bookshelf-title">Read</h2>
            <ListBooks
              books={this.state.books}/>
          </div>
        </div>

        <Button variant="fab" color="primary" aria-label="add" className="floating-button">
          <AddIcon />
        </Button>
      </CssBaseline>
    )
  }
}

export default BooksApp;
