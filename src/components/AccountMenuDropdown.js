import React, { Component } from 'react'
import Menu from './Menu'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class AccountMenuDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuActive: false
    };
  }

  toggleMenu() {
    this.setState({
      menuActive: ! this.state.menuActive
    });
  }

  render() {
    return (
    <div className="account-menu-dropdown">
      <div id="menu">
        <div className="account-icon" onClick={ this.toggleMenu.bind( this ) }>
          <span>A</span>
        </div>
        <ReactCSSTransitionGroup transitionName="menu" transitionEnterTimeout={500} transitionLeaveTimeout={100}>
          <Menu active={this.state.menuActive} />
        </ReactCSSTransitionGroup>
      </div>
    </div>
    )
  }
}

export default AccountMenuDropdown
