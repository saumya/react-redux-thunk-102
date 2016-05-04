//
'use strict';

import React, {Component} from 'react';

class Menu extends Component {
  constructor(props){
    super(props);
  }
  render(){
    var that = this;
    return (
      <ul>
        <li onClick={that._onHomeClick}>Home</li>
        <li onClick={that._onLoginClick}>Login</li>
        <li onClick={that._onRegisterClick}>Register</li>
      </ul>
    );
  }
  _onHomeClick(e){
    console.log('Menu:_onHomeClick: synthetic event:',e);
    console.log('Menu:_onHomeClick: native event:',e.nativeEvent);
  }
  _onLoginClick(){
    console.log('Menu:_onLoginClick');
  }
  _onRegisterClick(){
    console.log('Menu:_onRegisterClick');
  }
}
 export default Menu;
