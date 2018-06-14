import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Header from './layout/Header';
import ListBooks from './components/ListBooks';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

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
    teste: 'teste'
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
          <Grid container className="container">
            <h2>Currently Reading</h2>
            <ListBooks />
          </Grid>
        </div>
      </CssBaseline>
    )
  }
}

export default BooksApp;
