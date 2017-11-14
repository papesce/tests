import React, {Component} from 'react'
import { Redirect } from 'react-router-dom';
import AlbumList from './AlbumList'

class HomePage extends Component {

  render () {
    const {isAuth, albums} = this.props;
    if (!isAuth)  return <Redirect to="/login" />;  
    return (<div>
      <h1>home </h1>     
      <AlbumList albums= {albums}/>
    </div>
    )
  } 

}



export default HomePage