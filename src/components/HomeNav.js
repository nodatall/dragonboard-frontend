import React, { Component } from 'react';

class HomeNav extends Component {
  render () {
    return (
      <nav className="home-nav clearfix">
        <ul className="nav-container">
          <li className="home-nav-left">
            <a className="logo" href="#"><img src=""/> LIZARDBOARD</a>
          </li>

          <li className="home-nav-right">
            <ul className="home-nav-menu">
              <li><a href="#">PRODUCT</a></li>
              <li><a href="#">PRICING</a></li>
              <li><a href="#">BLOG</a></li>
              <li className="nav-dropdown">MORE
                <label className="more-label"> ^
                </label>
                <ul className="sub-nav">
                  <li><a href="#">BLOG 1</a></li>
                  <li><a href="#">BLOG 2</a></li>
                  <li><a href="#">BLOG 3</a></li>
                </ul>
              </li>
              <li><a href="#">LOGIN</a></li>
              <li><a href="#">BOOK A DEMO</a></li>
              <li>
                TRIAL AREA
              </li>
            </ul>
          </li>

        </ul>
      </nav>
    );

  }
}

export default HomeNav;
