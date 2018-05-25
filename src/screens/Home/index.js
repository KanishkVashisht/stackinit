import React from 'react';
import './styles.css';
import {Grid, List, Image, Card,Button} from 'semantic-ui-react';
import scrollToComponent from 'react-scroll-to-component';
import technologies from '../../utilities/technologies.js';

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
       <Grid.Row
        id="how"
        className="content"
        ref={how_it_works => (this.how_it_works = how_it_works)}
        >
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
                          <p>Learn the right direction to get started with and let them point you to further resources</p>
                    </div>
                </li>
              </ul>
      </Grid.Row>
      </Grid>

      <Card.Group className="content lessons"
        ref={guides => (this.guides = guides)}
      >
      {
        technologies.map((item,index)=>{
          return(
            <Card className="lesson" data-item={index}>
              <Card.Content>
                  <Image floated='right' size='mini' src={item.image} />
                  <Card.Header>
                    {item.name}
                  </Card.Header>
                  <Card.Meta>
                    {item.mentor} - ${item.price} for {item.time}
                  </Card.Meta>
                  <Card.Description>
                    {item.description}
                  </Card.Description>
              </Card.Content>
              <Card.Content extra>
               <div className='ui buttons'>
                 <Button
                  basic
                  color='green'
                  onClick={()=>this.sendEmail(item)}
                 >Learn {item.name} now</Button>
               </div>
             </Card.Content>
            </Card>
          )
        })
      }
      </Card.Group>

    </div>
    )
  }
}
