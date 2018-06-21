import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import NoMatch from './NoMatch'
import NavBar from './NavBar'
import Login from './Login'
import Register from './Register'
import Flash from './Flash'
import Home from './Home'
import ProtectedRoute from './ProtectedRoute'
import AuthRoute from './AuthRoute'
import FetchUser from './FetchUser'
import Posts from './Posts'
import PostForm from './PostForm'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <ProtectedRoute exact path='/' component={Home} />
            <ProtectedRoute exact path='/posts' component={Posts} />
            <ProtectedRoute exact path="/post/:id" component={PostForm} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    )
  }
}

export default App
