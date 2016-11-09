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
          <div className="customer-blockquote">
            I have three apples. -Isaac Newton.
          </div>

          <div className="customer-blockquote">
          </div>
        </section>

        <section className="icons">

        </section>
      </div>
    );

  }
}


export default HomeBody;
