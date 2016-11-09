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
              <p>
                I found an apple thanks to Lizardboard
              </p>
              <div className="cite">
                Isaac Newton
              </div>
            </div>

            <div className="customer-blockquote">
              <p>
                Since we installed Lizardboard in our office, sales have gone up by 15 percent
              </p>
              <div className="cite">
                John Adamos, CEO, Adam Apples
              </div>
            </div>
          </div>
        </section>

        <section className="icons">

        </section>
      </div>
    );

  }
}


export default HomeBody;
