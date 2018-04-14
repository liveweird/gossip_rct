import React, { Component } from 'react';
import { Container, Divider, Grid, Header, Segment } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
        <Grid columns={16}>
            <Grid.Row>
              <Grid.Column width={16}>top</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column floated='left' width={4}>
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
                <Container>
                  <Header as='h4' attached='top' block>Channel name</Header>
                  <Segment attached>Segment</Segment>

                  <Divider section />
                </Container>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>bottom</Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
