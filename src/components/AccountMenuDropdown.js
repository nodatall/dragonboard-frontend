import React, { Component } from 'react'
import Menu from './Menu'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class AccountMenuDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuActive: false
    };
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  }

  render() {
    let menu
    if(this.state.menuActive) {
      menu = <Menu />
    } else {
      menu = ""
    }
    return (

      <div id="menu">
        <div className="account-icon" onClick={ this.toggleMenu.bind( this ) }>
          <span>A</span>
        </div>
      <ReactCSSTransitionGroup transitionName="menu" transitionEnterTimeout={500} transitionLeaveTimeout={100}>
        {menu}
      </ReactCSSTransitionGroup>
    </div>
    )
  }
}

export default AccountMenuDropdown
