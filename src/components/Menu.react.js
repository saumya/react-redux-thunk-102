//
'use strict';

import React, {Component} from 'react'
import MenuItem from './MenuItem.react'
import Nav from './Nav.react'

class Menu extends Component {
  render(){
    return (
      <Nav>
        <MenuItem onItemClick={this._onHomeClick} itemName="Home MenuItem" />
        <MenuItem onItemClick={this._onLoginClick} itemName="Login MenuItem" />
        <MenuItem onItemClick={this._onRegisterClick} itemName="Register MenuItem" />
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
