import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';

import history from 'Root/history';

export default class extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' />
        </Switch>
      </Router>
    );
  }
}
