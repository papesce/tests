import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Spotify from 'spotify-web-api-js'

const spotifyApi = new Spotify();

//const LoginPage = withRouter(
//  ({history}) => (<a href="http://localhost:3001/login"> Login </a>))

class LoginPage extends Component {

  render () {
    return (<a href="http://localhost:3001/login"> Login </a> )
    
  }

}

export default LoginPage