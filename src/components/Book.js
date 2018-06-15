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

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { anchorEl } = this.state;
    const { book } = this.props;
    return(
      <div>
        <Card className="card">
          <CardMedia
            image={book.imageLinks.thumbnail}
            title={book.title}
            className="card-image"
          />
          <CardContent className="card-content">
            <Typography gutterBottom component="h2" className="card-title">
              {book.title}
            </Typography>
            <Typography component="p">
              {book.authors}
            </Typography>
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
              <MenuItem>Currently reading</MenuItem>
              <MenuItem>Want to read</MenuItem>
              <MenuItem>Read</MenuItem>
              <MenuItem>None</MenuItem>
            </Menu>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default Book;