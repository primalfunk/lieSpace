import React from 'react'
import { Container, Header, Card, Grid, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Segment } from 'semantic-ui-react'

class Posts extends React.Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('/api/posts')
      .then( res => this.setState({ posts: res.data }))
  }

  render() {
    const { posts } = this.state
    return (
      <Container>
        <Header textAlign="center">Lies</Header>
        <Segment>Make a <Link to={'donotclickit'}>New</Link> Lie</Segment>
        <Divider />
        <Grid centered columns={2}>
          { posts.map( post => (
              <Card key={post.id}>
                <Card.Content><b>{post.title}</b></Card.Content>
                <Card.Content><Card.Meta><i>By: {post.user_name}</i></Card.Meta></Card.Content>
                <Card.Content><Card.Description>{post.body}</Card.Description></Card.Content>
                <Card.Content extra>
                  <Link to={`/post/${post.id}`}>Edit Post</Link>
                </Card.Content>
              </Card>
          ))}
        </Grid>
      </Container>
    )
  }
}

export default Posts