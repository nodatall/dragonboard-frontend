import React, { Component } from 'react'

import '../styles/local_nav.css'

class LocalNav extends Component {
  render() {
    return(
      <nav className="local-nav">
        <div className="local-nav-left"> Company Dasboard </div>
        <div className="local-nav-right"></div>
          <a href="#" className="widget-nav-button">Add Widget</a>
          <a href="#" className="share">Share</a>
          <a href="#" className="settings">Settings</a>
      </nav>
    )
  }
}

export default LocalNav
