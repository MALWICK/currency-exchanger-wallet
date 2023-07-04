import React from 'react';
import './WalletCOnt1.css';
import WalletAction from '../WalletAction/WalletAction';

function WalletConta1() {
  return (
    <div className="firstWallet__container">
      <div className="firstWallet__container__text">
        <h2>Switch Wallet Currency Converter</h2>
        <p>Ckeck live foreign currency exchange rates</p>
      </div>
      <WalletAction />
    </div>
  );
}

export default WalletConta1;
