import React, { useState } from 'react';
import './WalletNav.css';
import { Link } from 'react-router-dom';

function WalletNavbar() {
  const [isOpen, setIsopen] = useState(false);
  const toggleMenu = () => setIsopen(!isOpen);
  return (
    <div className="wallet__nav">
      <div className="nav__inner">
        <div className="logo">
          <span>
            <i className="fa-solid fa-repeat" />
            Switch Wallet
          </span>
          <span className="perso">Personal</span>
          <p className="perso">|</p>
          <p className="bus">Business</p>
        </div>
        <div className={`anchor ${isOpen ? 'active' : ''}`}>
          <Link to="/account">Send Money</Link>
          {/* <a href="send money" aria-hidden>
            Converter
          </a> */}
          <Link to="/">Converter</Link>
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
        <div className="navbar-toggle" onClick={toggleMenu} aria-hidden>
          <i className="fa-solid fa-bars" />
        </div>
      </div>
    </div>
  );
}

export default WalletNavbar;
