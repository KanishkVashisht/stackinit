import React from 'react';
import './App.css';
import ReactGA from 'react-ga';

import Routes from './utilities/Routes';

class App extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-119887379-1');
    // This just needs to be called once since we have no routes in this case.
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <Routes/>
    );
  }
}

export default App;
