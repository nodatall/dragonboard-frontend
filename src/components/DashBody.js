import React, { Component } from 'react'
import DashWidget from './DashWidget'
import '../styles/dash_body.css'

class DashBody extends Component {
  render() {
    return (
      <div className="dash-main">
        <DashWidget/>
      </div>
    )
  }
}

export default DashBody
