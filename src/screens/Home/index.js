import React from 'react';
import './styles.css';
import {Grid, List, Image} from 'semantic-ui-react';


export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <div id="logo-holder">
        <div className="content">
              <img id="logo" src={require('../../assets/logo/stackInitLogo.png')}/>
        </div>
      </div>
      <Grid>
      <Grid.Row columns={2}>
            <Grid.Column width={6} id="icon">
                  <img id="logo" src={require('../../assets/logo/chatting512.png')}/>
            </Grid.Column>
            <Grid.Column id="what" width={10}>
                    <h2>Learning new technologies is <b>tough</b>.</h2>
                    <h3>Finding the right direction is complicated and confusing.</h3>
                    <p>Talk to experts with industry experience and understand the first principles of any topic.</p>
           </Grid.Column>
       </Grid.Row>
       <Grid.Row id="how" className="content">
              <hr className="Three-title" data-content="How StackInit works"/>
              <ul className="lateral-three-row">
                <li>
                    <div className="list-item">
                          <img src={require('../../assets/logo/select.png')}/>
                          <h1 id="choose-heading">Choose</h1>
                          <p>Choose a topic from the list below that you want to start learning</p>
                    </div>
                </li>
                <li>
                    <div className="list-item">
                          <img src={require('../../assets/logo/handshake.png')}/>
                          <h1 id="contact-heading">Contact</h1>
                          <p>Contact the instructor and schedule a time that works for both of you</p>
                    </div>
                </li>
                <li>
                    <div className="list-item">
                          <img src={require('../../assets/logo/communication.png')}/>
                          <h1 id="learn-heading">Learn</h1>
                          <p>Learn the right direction to get started with and let them point you to good resources</p>
                    </div>
                </li>
              </ul>
      </Grid.Row>
      </Grid>
    </div>
    )
  }
}
