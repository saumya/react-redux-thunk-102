//
'use strict';
import React, {Component} from 'react'
import { Link, IndexLink } from 'react-router'

import { connect } from 'react-redux'

import Nav from './Nav.react'
import Menu from './Menu.react'

class ApplicationControllerView extends Component {
  render(){
    console.group('ApplicationControllerView : render');
    console.log('this.props',this.props);
    console.log('this.state',this.state);
    console.groupEnd();
    return (
      <div>
        <div>Application Controller View : Root Controller View</div>
        <Menu id="navlist" />
        { this.props.children }
      </div>
    );
  }
}
// Bind to the events of the Store
const mapStateToProps = (state, ownProps) => {
  console.log('ApplicationControllerView : mapStateToProps');
  return {
    //active: ownProps.filter === state.visibilityFilter
    state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('ApplicationControllerView : mapDispatchToProps');
  return {
    onClick: () => {
      //dispatch(setVisibilityFilter(ownProps.filter))
      console.log('ApplicationControllerView : onClick');
    }
  }
}
ApplicationControllerView = connect(mapStateToProps,mapDispatchToProps)(ApplicationControllerView)

export default ApplicationControllerView;
