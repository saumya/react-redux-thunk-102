//
'use strict';
import React, {Component} from 'react'
import { Link, IndexLink } from 'react-router'
class ApplicationControllerView extends Component {
  render(){
    return (
      <div>
        <div>Application Controller View : Root Controller View</div>
        <ul id="navlist">
          <li><Link to='/one'> One </Link></li>
          <li><Link to='/two'> Two </Link></li>
          <li><IndexLink to="/">Home</IndexLink></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}
export default ApplicationControllerView;
