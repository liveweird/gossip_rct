import React, { Component } from 'react';
import { Comment, Container, Grid, Header, Icon, Input, Menu, Segment } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
        <Grid columns={16} textAlign='left'>
            <Grid.Row>
              <Grid.Column width={16}>
                <Menu>
                  <Menu.Item header>Gossip</Menu.Item>
                  <Menu.Item
                    name='chat'
                    active='true'
                    content='Chat'
                  />
                  <Menu.Item
                    name='users'
                    active='false'
                    content='Users'
                  />
                  <Menu.Item
                    name='about'
                    active='false'
                    content='About'
                  />
                </Menu>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>
                <Segment.Group>
                  <Segment>
                    <p>Channels</p>
                  </Segment>
                  <Segment.Group>
                    <Segment>
                      <p>Channel #1</p>
                    </Segment>
                    <Segment>
                      <p>Channel #2</p>
                    </Segment>
                    <Segment>
                      <p>Channel #3</p>
                    </Segment>
                  </Segment.Group>
                </Segment.Group>
              </Grid.Column>
              <Grid.Column width={12}>
                <Segment>
                  <Header as='h3' attached='top'>Channel #1</Header>
                  <Comment.Group size='small'>

                    <Comment>
                      <Comment.Avatar src='/assets/images/avatar/small/matt.jpg' />
                      <Comment.Content>
                        <Comment.Author as='a'>Matt</Comment.Author>
                        <Comment.Metadata>
                          <div>Today at 5:42PM</div>
                        </Comment.Metadata>
                        <Comment.Text>How artistic!</Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>
                            <Icon name='like' />
                            Like
                          </Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>

                    <Comment>
                      <Comment.Avatar src='/assets/images/avatar/small/elliot.jpg' />
                      <Comment.Content>
                        <Comment.Author as='a'>Elliot Fu</Comment.Author>
                        <Comment.Metadata>
                          <div>Yesterday at 12:30AM</div>
                        </Comment.Metadata>
                        <Comment.Text>
                          <p>This has been very useful for my research. Thanks as well!</p>
                        </Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>
                            <Icon name='like' />
                            Like
                          </Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>

                    <Comment>
                      <Comment.Avatar src='/assets/images/avatar/small/jenny.jpg' />
                      <Comment.Content>
                        <Comment.Author as='a'>Jenny Hess</Comment.Author>
                        <Comment.Metadata>
                          <div>Just now</div>
                        </Comment.Metadata>
                        <Comment.Text>
                          Elliot you are always so right :)
                        </Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>
                            <Icon name='like' />
                            Like
                          </Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>

                    <Comment>
                      <Comment.Avatar src='/assets/images/avatar/small/joe.jpg' />
                      <Comment.Content>
                        <Comment.Author as='a'>Joe Henderson</Comment.Author>
                        <Comment.Metadata>
                          <div>5 days ago</div>
                        </Comment.Metadata>
                        <Comment.Text>
                          Dude, this is awesome. Thanks so much
                        </Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>
                            <Icon name='like' />
                            Like
                          </Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>

                  </Comment.Group>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Input
                   fluid
                   action={{ color: 'teal', labelPosition: 'right', icon: 'add', content: 'Add' }}
                 />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
