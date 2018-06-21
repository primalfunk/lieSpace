import React, { Component } from 'react'
import { Container, Header, Segment, Grid, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Home extends Component {
  state = { users: [] }

  componentDidMount() {

    axios.get('/users')
      .then( res => {
        this.setState({ users: res.data })
      })
  }

  render() {
    let { users } = this.state
    return (
      <Container>
        <Header as='h1' textAlign='center'>lie Space</Header>
        <Segment className="small red raised">
          <Grid centered><h3>Look at the<b><Link to={'/posts'}> Lies</Link></b></h3></Grid>
        </Segment>
        <p>...or find a new "friend"</p>
        <Container>
        <Segment className="raised blue">
          { users.map( user => (
            <Segment key={user.id}>
              { user.name }{" | "}<i>{user.email}</i>{ " | " }
              <div class="ui animated mini fade button" tabindex="0">
                <div class="visible content">
                  <i class="star icon"></i></div>
                <div class="hidden content">Friend</div>
              </div>
            </Segment>
          ))}
        </Segment>
        </Container>
      </Container>
    )
  }
}

export default Home
