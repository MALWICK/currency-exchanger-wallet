import React from 'react';
import Styles from './PassiveNavBar.module.css';

function PasiveNavBar() {
  return (
    <div className={Styles.PasiveNavBar}>
      <nav className={Styles.navbar}>
        <div className={Styles.ul__naming}>
          <li>
            <i className="fa-solid fa-gift" />
            <a href="/">
              Register now-Get up to 1 month free in converting and updating
              your currency at a low Rate(for verified Users)
            </a>
          </li>
          <li>
            <a href="/about">
              <button type="button">Redeem Gift</button>
            </a>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default PasiveNavBar;
