import React, { Component } from 'react';

class HomeBody extends Component {
  render () {
    return (
      <div>
        <section className="overlay">
          <div className="overlay-img"></div>
          <div className="overlay-header">
            <h1 className="overlay-heading">Live Monitor Dashboard Software
              <div className="overlay-message">Focus your teams and improve your KPIs</div>
            </h1>
            <a href="#" className="flat-button trial-button">Start your free trial</a>
            <a href="#" className="flat-button demo-button">Book a demo</a>
          </div>
        </section>

        <section className="quotes">
          <div className="quotes-container">
            <div className="customer-blockquote">
              <p className="customer-testamonial">
                I found an apple thanks to Dragonboard
              </p>
              <div className="inner">
                <img src= "https://1.bp.blogspot.com/-vw-cIkAWfDI/TeDVgYZljYI/AAAAAAAAAAQ/TLY7IGiDC7M/s1600/gravity2.png"/>
                <cite>Isaac Newton</cite>
              </div>
            </div>

            <div className="customer-blockquote">
              <p className="customer-testamonial">
                We installed Dragonboard, sales are now up by 15%
              </p>
              <div className="inner">
                <img src= "https://imgs-tuts-dragoart-386112.c.cdn77.org/how-to-draw-john-adams-john-adams_1_000000016809_5.png"/>
                <cite>John Adamos, CEO, Adam Apples</cite>
              </div>
            </div>
          </div>
        </section>

        <section className="icons">
          <div className="icons-container">
            <h2 className="section-heading"> A DASHBOARD TOOL USED BY THE FASTEST GROWING ORGANIZATIONS </h2>
            <img src="https://www.geckoboard.com/assets/png/home-logo-bar.png" alt="Dragonboard customers"/>
          </div>
        </section>
      </div>
    );

  }
}


export default HomeBody;
