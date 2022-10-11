import React, { Component } from 'react'
import { NavigationEvents } from 'react-navigation';

class AppNavigationEvents extends Component {


  render() {
    return <NavigationEvents {...this.props} />
  }
}
export default AppNavigationEvents;