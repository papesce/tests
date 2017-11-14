import React, {Component} from 'react'
import { Redirect } from 'react-router-dom';


class HomePage extends Component {

  render () {
    const {isAuth, albums} = this.props;
    if (!isAuth)  return <Redirect to="/login" />;  
    return (<div>
      <h1>home </h1>     
      <h2>Albums: {JSON.stringify(albums)}</h2>
    </div>
    )
  } 

}



export default HomePage