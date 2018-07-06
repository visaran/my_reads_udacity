import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Header from './layout/Header';
import ListBooks from './components/ListBooks';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Route, Link } from 'react-router-dom';
import SearchBooks from './components/SearchBooks';

class BooksApp extends Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }
  

  getAll = () => {
    BooksAPI.getAll().then((books) => {
        this.setState({ books });
    });
  }

  componentDidMount() {
    this.getAll();
  }

  moveTo = (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then(() => {
      this.setState((state) => ({
        books: state.books.filter((b) => b.id !== book.id).concat(book)
      }));
    });
  }

  render() {
    const shelves = {
      currentlyReading: ['Currently Reading', 'currentlyReading'],
      wantToRead: ['Want to Read', 'wantToRead'],
      read: ['Read', 'read']
    }
    return (
      <CssBaseline>
        <div className="app">
          <Route exact path="/" render={() => (
            <div>
              <Header
                isHome={true}
                title="MyReads"/>
              <div className="container">
                { Object.keys(shelves).map((shelf) =>
                  <ListBooks key={shelf}
                    shelfName={shelves[shelf][1]}
                    title={shelves[shelf][0]}
                    books={this.state.books}
                    onMoveTo={this.moveTo}/>
                )}
                  <Link to="/search">
                    <Button variant="fab" color="primary" aria-label="add" className="floating-button">
                      <AddIcon />
                    </Button>
                  </Link>
              </div>
            </div>
          )} />

          <Route path="/search" render={() => (
            <div>
              <Header
                isHome={false}
                title="Search Books"/>
              <div className="container">
                <SearchBooks
                  onMoveTo={this.moveTo}
                  books={this.state.books}/>
              </div>
              
            </div>
          )} />

          {/* <Route path="/search" component={SearchPage}/> */}
            
        </div> 
      </CssBaseline>
    )
  }
}

export default BooksApp;
