import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const isHome = this.props.isHome;
    let button;

    if (!isHome) {
      button = <Link to="/" className="button-back">
                  <IconButton color="inherit" aria-label="Voltar">
                    <ArrowBackIcon />
                  </IconButton>
                </Link>
    }
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          {button}
          
          <Typography variant="title" color="inherit">
            {this.props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header;
