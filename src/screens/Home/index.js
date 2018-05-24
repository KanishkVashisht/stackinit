import React from 'react';
import './styles.css';
import {Grid} from 'semantic-ui-react';


export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <div id="logo-holder">
        <img id="logo" src=require('../../assets/logo/stackInitLogo.png')/>
      </div>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column id="what">
                <h2>We know how tough it is to get started with new technologies.</h2>
                <h3>Blog posts, articles and youtube videos only confuse you more.</h3>
                <p>Starting today, you can get a high level overview of any topic from an expert right here.</p>
          </Grid.Column>
          <Grid.Column id="how">
              <h2>How does it work?</h2>
              <ul>
                <li>Select a topic.</li>
                <li>Contact the instructor and schedule a time.</li>
                <li>Speak at the decided time and get a good overview of the technology.</li>
              </ul>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    )
  }
}
