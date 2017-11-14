import React, {Component} from 'react'
import { Redirect } from 'react-router-dom';
import AlbumList from './AlbumList'
import AppBar from 'material-ui/AppBar'


class HomePage extends Component {

  render () {
    const {isAuth, albums} = this.props;
    if (!isAuth)  return <Redirect to="/login" />;  
    return (<div>
        <AppBar title='Spotify Sample'> </AppBar>
       
      <AlbumList albums= {albums}/>
    </div>
    )
  } 

}



export default HomePage