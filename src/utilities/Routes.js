import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import {Home} from '../screens';

export default class Routes extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    )
  }
}
