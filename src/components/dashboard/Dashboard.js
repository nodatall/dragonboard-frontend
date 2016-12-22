import React, { Component } from "react"
import { connect } from "react-redux"

import Navigation from "./navigation/Navigation"
import SecondaryNavigation from "./secondary_navigation/SecondaryNavigation"
import Body from "./Body"

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-landing">
        <Navigation />
        <SecondaryNavigation />
        <Body widgets={ this.props.widgets } />
      </div>
    )
  }
}

export default connect( state => ({ widgets: state.widgets }) )( Dashboard )
