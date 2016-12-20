import React, { Component } from 'react'

import Hamburger from './Hamburger'
import Menu from './Menu'

import '../../../styles/landing/navigation/navigation.css'
import '../../../styles/landing/navigation/menu.css'

export default class Navigation extends Component {
  render() {
    return (
      <nav className='landing-navigation clearfix'>
        <div className='navigation-container'>
          <div className='landing-navigation-left'>
            <a className='logo' href='#'>
              <div className='logo-green-square'>
                <div>D</div>
              </div>
              <img src='/images/logo.svg' role='presentation' />
            </a>
          </div>

          <div className='landing-navigation-right'>
            <div className='landing-navigation-menu'>
              <a className='landing-navigation-grey' href='#'>product</a>
              <a className='landing-navigation-grey' href='#'>PRICING</a>
              <a className='landing-navigation-grey' href='#'>BLOG</a>
              <div className='navigation-dropdown'>
                <Button />
              </div>
              <a className='login-navigation' href='#'>LOGIN</a>
              <a className='demonstration-button' href='#'>BOOK A DEMO</a>
              <input className='trial-input' type='text' placeholder='Email address' />
              <a className='navigation-trial-button' href='#'>Free Trial</a>
            </div>
          </div>
          <Hamburger />
        </div>
      </nav>
    )
  }
}

const Button = React.createClass({
  getInitialState () {
    return {
      isOpen: false
    }
  },

  toggleMenu (event) {
    this.setState({isOpen: !this.state.isOpen})
  },

  onClose () {
    this.setState({isOpen: false})
  },

  componentDidMount () {
    document.body.addEventListener('click', this.onClose)
  },

  componentWillUnmount () {
    document.body.removeEventListener('click', this.onClose)
  },

  render () {
    return <div>
      <a onClick={this.toggleMenu} href='#'>
        More
        <div className='more-triangle' />
      </a>
      <Menu isOpen={this.state.isOpen} />
    </div>
  }
})
