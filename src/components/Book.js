import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

class Book extends Component {
  state = {
    anchorEl: null,
  };

  // moveTo = (book, shelf) => {
  //   BooksAPI.update(book, shelf).then((shelf) =>{
  //     this.setState({ shelf });
  //   });
  // }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { book, onMoveTo } = this.props;
    return(
      <div>
        <Card className="card">
          {book.imageLinks ? (
            <CardMedia
              image={book.imageLinks.thumbnail}
              title={book.title}
              className="card-image"
            />
          ) : <img src="http://placehold.it/140x195" alt="placeholder image"/> }
          
          <CardContent className="card-content">
            <Typography gutterBottom component="h2" className="card-title">
              {book.title}
            </Typography>
            {book.authors && book.authors.map(author => (
              <Typography component="p" className="author-name">
                {author}
              </Typography>
            ))}
            
          </CardContent>
          <CardActions className="card-actions">
            <Button
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
              className="card-open-menu"
              >
              move to:
            </Button>
            
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={() => onMoveTo(book, 'currentlyReading')}>Currently reading</MenuItem>
              <MenuItem onClick={() => onMoveTo(book, 'wantToRead')}>Want to read</MenuItem>
              <MenuItem onClick={() => onMoveTo(book, 'read')}>Read</MenuItem>
              <MenuItem onClick={() => onMoveTo(book, 'none')}>None</MenuItem>
            </Menu>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default Book;