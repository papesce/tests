import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setToken, searchTerm} from '../redux/actions'
import HomePage from './HomePage'

class TokenContainer extends Component {
     
  componentDidMount() {
    const token = this.props.match.params.accessToken;
    this.props.setToken(token) 
    setTimeout(() => this.props.search('Jewel'), 2000);
  }
  render() {
    return (
      <div>
        {/*<p> {this.props.token} </p>*/}
        <HomePage albums={this.props.albums} 
          isAuth={true}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => {dispatch(setToken(token))},
    search: (str) => dispatch(searchTerm(str))  
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    albums: state.albums,
    token: state.token};
}
  

export default connect(mapStateToProps, mapDispatchToProps)(TokenContainer);