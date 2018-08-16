import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Gallery from './container/gallery';
import DrawImage from './container/drawImage';

// Switch between one screen to another screen
class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route exact path="/drawImage" component={DrawImage} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
