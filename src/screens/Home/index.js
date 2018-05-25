import React from 'react';
import './styles.css';
import {Grid} from 'semantic-ui-react';
import scrollToComponent from 'react-scroll-to-component';
import technologies from '../../utilities/technologies.js';
import {Guides, HowItWorks} from './components';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  sendEmail = (technology) => {
    const contact = technology.contact;
    const subject = `I want to get started with learning ${technology.name}`;
    const body = `Hi ${technology.mentor},
    %0A%0AI found your email on StackInit. I am looking to get an introduction to ${technology.name} and how to move forward with improving my ${technology.name} skills.
    %0A%0AWhat is your availability like to get on a quick phone/video call.%0A%0ABest,`
    window.location.href = `mailto:${contact}?subject=${subject}&body=${body}`
  }

  scrollToGuides = () => {
    scrollToComponent(this.guides);
  }

  scrollToHowItWorks = () => {
    scrollToComponent(this.how_it_works);
  }

  render() {
    return (
    <div>
      <div id="logo-holder">
        <div className="content">
              <img id="logo" src={require('../../assets/logo/stackInitLogo.png')}/>
              <div id="links">
                  <a onClick={this.scrollToHowItWorks}>How it works</a>
                  <a onClick={this.scrollToGuides}>Guides</a>
              </div>
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
         <HowItWorks
          ref={how_it_works=>(this.how_it_works=how_it_works)}
         />
      </Grid>
      <Guides
        sendEmail={this.sendEmail}
        technologies={technologies}
        ref={guides=>(this.guides=guides)}
      />
    </div>
    )
  }
}
