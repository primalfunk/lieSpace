import React from 'react'
import axios from 'axios'
import { Form, Container, Button, Header, Divider, Card } from 'semantic-ui-react'
import { connect } from 'react-redux'

class PostForm extends React.Component {
  state = { post: [] }

  componentDidMount() {
    axios.get(`/api/posts/${this.props.match.params.id}`)
      .then(res => this.setState({ post: res.data }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props
    const { post } = this.state
    const post = { id, title, body, user_name }
    dispatch({ type: 'ADD_POST', post })
    this.setState({ post: '' })
  }

  render() {
    let { post } = this.state
    if(post.length) {
      post = post[0]
      return(
        <Container>
          <br />
          <Header>{ (post.id) ? "Edit Post" : "Create New Post"}</Header>
          < Form >
            <Form.Field>
              <label>Title</label>
              <input placeholder='Post Title' />
            </Form.Field>
            <Form.Field>
              <label>Body</label>
              <input placeholder='Post Body' />
            </Form.Field>
            <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
          </Form >
          <Divider />
          <br />
          <i>It's this one.</i>
          <Card>
            <Card.Content>
              <Card.Header>{ post.title }</Card.Header>
              <Card.Meta>By: { post.user_name }</Card.Meta>
              <Card.Content>{ post.body }</Card.Content>
            </Card.Content>
          </Card>
        </Container>
      )
    } else {
      return(
        <div>
          Loading...
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps)(PostForm)

