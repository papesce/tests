import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react'


//const Login = () => (<h2> Login </h2>)

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {username: 'pablo', password: ''}
    this.usernameChanged = this.usernameChanged.bind(this);
    this.passwordChanged = this.passwordChanged.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  usernameChanged(event, newValue) {
    this.setState({username: newValue})
  }
  passwordChanged(event, newValue ) {
    this.setState({password: newValue})
  }
  handleClick(event) {

  }
  submitForm() {

  }
  render() {
    const email = this.state.username;
    const password = this.state.password;
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Spotify Login"/>
            <TextField hintText="Enter your spotify username"
              floatingLabelText="Username"
              onChange = {this.usernameChanged}/>
            <br/>
            <TextField hintText="Enter your spotify passowrd"
              type = "password"
              floatingLabelText="Password"
              style={{margin: 15}}
              onChange = {this.passwordChanged}
            />
            <br/>
            <RaisedButton label="Submit" primary={true}
              onClick={this.handleClick}/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}



export default Login