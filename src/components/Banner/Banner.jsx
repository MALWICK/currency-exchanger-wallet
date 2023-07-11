import React from 'react';
import './banner.css';

function Banner() {
  return (
    <div className="banner">
      <div className="banner__inner">
        <h2>Switch Wallet Currency Api</h2>
        <p>Powering commercial grade rates at 300+ companies Worldwide</p>
        <div className="icons">
          <div className="div">
            <i className="fa-brands fa-shopify" />
            <h1>Shopify</h1>
          </div>
          <div className="div">
            <i className="fa-sharp fa-solid fa-clone" />
            <i className="fa-brands fa-linkedin" />
            <h1>ClearBooks</h1>
          </div>
          <div className="div">
            <i className="fa-brands fa-cc-visa" />
            <i className="fa-brands fa-discord" />
            <h1>VistaPrint</h1>
          </div>
        </div>
        <div className="btn__div1">
          <button type="button">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
