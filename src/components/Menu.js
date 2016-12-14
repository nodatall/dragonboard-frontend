import React, { Component } from 'react'
import '../styles/menu.css'

class Menu extends React.Component {
  render() {
    return (

      <div className="account-menu">
        <div className="account-menu-list">
          <div className="account-menu-list-item"><a href="#">Account </a></div>
          <div className="account-menu-list-item"><a href="#">Logout </a></div>
        </div>
      </div>
    )
  }
}

export default Menu
