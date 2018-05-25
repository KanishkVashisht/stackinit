import React from 'react';
import {Grid} from 'semantic-ui-react';

export default class HowItWorks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid.Row
       id="how"
       className="content"
       >
             <hr className="Three-title" data-content="How StackInit works"/>
             <ul className="lateral-three-row">
               <li>
                   <div className="list-item">
                         <img src={require('../../../assets/logo/select.png')}/>
                         <h1 id="choose-heading">Choose</h1>
                         <p>Choose a topic from the list below that you want to start learning</p>
                   </div>
               </li>
               <li>
                   <div className="list-item">
                         <img src={require('../../../assets/logo/handshake.png')}/>
                         <h1 id="contact-heading">Contact</h1>
                         <p>Contact the instructor and schedule a time that works for both of you</p>
                   </div>
               </li>
               <li>
                   <div className="list-item">
                         <img src={require('../../../assets/logo/communication.png')}/>
                         <h1 id="learn-heading">Learn</h1>
                         <p>Learn the right direction to get started with and let them point you to further resources</p>
                   </div>
               </li>
             </ul>
     </Grid.Row>
    )
  }
}
