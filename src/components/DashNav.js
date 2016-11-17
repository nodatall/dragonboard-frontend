import React, { Component } from 'react'
import '../styles/dash_nav.css'


class DashNav extends Component {
  render () {
    return (
      <nav className="dash-nav">
        <div className="dashboard-menu"> &#9776; Dashboards </div>
        <div className="logo-white-square">
          <div>D</div>
        </div>
        <div className="dash-nav-right">
          <h2> Help </h2>
        </div>
      </nav>
    )
  }
}

export default DashNav
