import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';

import history from 'Root/history';

import Landing from 'Root/components/Landing';

import './index.less';

export default class extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
      </Router>
    );
  }
}
