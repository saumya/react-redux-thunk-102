//
'use strict';
import React, {Component} from 'react'
import LoginContainer from '../containers/LoginContainer'
class Home extends Component {
  render(){
    return (
      <div>
        <div>Home</div>
        <LoginContainer />
      </div>
    );
  }
}
export default Home
