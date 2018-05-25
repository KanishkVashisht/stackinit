import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
