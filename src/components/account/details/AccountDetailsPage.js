import React, { Component } from 'react'

import Navigation from '../../dashboard/navigation/Navigation'
import SideMenu from './SideMenu'
import DetailsPageMain from './DetailsPageMain'

import '../../../styles/account/details/account_details_page.css'

export default class AccountDetailsPage extends Component {
  render() {
    return (
      <div className="account-details-page">
        <div className="navigation">
          <Navigation />
          <div className="top-border" />
        </div>
        <SideMenu />
        <DetailsPageMain />
      </div>
    )
  }
}
