import React from 'react';
import {Card,Button, Image} from 'semantic-ui-react';

export default class Guides extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {technologies, sendEmail} = {...this.props};

    return (
      <Card.Group className="content lessons"
      >
      {
        technologies.map((item,index)=>{
          return(
            <Card className="lesson" data-item={index} key={index}>
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
                  onClick={()=>sendEmail(item)}
                 >Learn {item.name} now</Button>
               </div>
             </Card.Content>
            </Card>
          )
        })
      }
      </Card.Group>
    )
  }
}
