import React, { Component } from 'react';
import classes from './convertion/App.css';
import Main from './main';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Main/>        
      </div>
    );
  }
}

export default App;
