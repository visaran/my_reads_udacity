import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

const Header = (props) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Link to="/">
        <IconButton color="inherit" aria-label="Voltar">
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <Typography variant="title" color="inherit">
        {props.title}
      </Typography>
    </Toolbar>
  </AppBar>
)

export default Header;