import React, { Component } from 'react'
import HomeBody from './HomeBody'
import HomeNav from './HomeNav'
import HomeFooter from './HomeFooter'

import '../styles/home_body.css'
import '../styles/home_nav.css'
import '../styles/button.css'

class App extends Component {
  render () {
    return (
      <div className='home-page-wrapper'>
        <HomeNav />
        <HomeBody />
        <HomeFooter />
      </div>
    )
  }
}

export default App
