import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const Header = (props) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="title" color="inherit">
        {props.title}
      </Typography>
    </Toolbar>
  </AppBar>
)

export default Header;