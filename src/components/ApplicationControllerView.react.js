//
'use strict';
import React, {Component} from 'react'
import { Link, IndexLink } from 'react-router'

import Nav from './Nav.react'
import Menu from './Menu.react'

class ApplicationControllerView extends Component {
  render(){
    return (
      <div>
        <div>Application Controller View : Root Controller View</div>
        <Menu id="navlist" />
        { this.props.children }
      </div>
    );
  }
}
export default ApplicationControllerView;
