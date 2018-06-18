import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class SearchBooks extends Component {
  render() {
    return(
        <div>
          <form
            >
            <TextField
              label="Search"
              placeholder="Search">
            </TextField>
          </form>
        </div>
      
    )
  }
}

export default SearchBooks