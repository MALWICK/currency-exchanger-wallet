import React from 'react';
import './WalletNav.css';

function WalletNavbar() {
  return (
    <div className="wallet__nav">
      <div className="nav__inner">
        <div className="logo">
          <span>
            <i className="fa-solid fa-repeat" />
            Switch Wallet
          </span>
          <span>Personal</span>
          <p>|</p>
          <p className="bus">Business</p>
        </div>
        <div className="anchor">
          <a href="send money" aria-hidden>
            Send Money
          </a>
          <a href="send money" aria-hidden>
            Converter
          </a>
          <a href="send money" aria-hidden>
            Currency API
          </a>
          <a href="send money" aria-hidden>
            Tools
          </a>
          <a href="send money" aria-hidden>
            Resources
          </a>
        </div>
      </div>
    </div>
  );
}

export default WalletNavbar;
