//
'use strict';

import React, {Component} from 'react'
import MenuItem from './MenuItem.react'
import Nav from './Nav.react'

class Menu extends Component {
  constructor(props){
    super(props);
  }
  render(){
    var that = this;
    return (
      <Nav>
        <MenuItem onItemClick={that._onHomeClick} itemName="Home MenuItem" />
        <MenuItem onItemClick={that._onLoginClick} itemName="Login MenuItem" />
        <MenuItem onItemClick={that._onRegisterClick} itemName="Register MenuItem" />
      </Nav>
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
