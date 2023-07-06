import React from 'react';
import './walletOperation.css';

function WalletOPeration() {
  return (
    <div className="wallet__operation">
      <h1>The fast and trusted way to send money</h1>
      <div className="wallet__operationContainer">
        <div className="operation__totalAmt">
          <p>Wallet Value</p>
          <p>0.00</p>
        </div>
        <div className="multi__task">
          <p>Deposit</p>
          <p>Transfer Money</p>
          <div className="select__initial_value">
            <select id="select__default" className="select__defult">
              <option value="usd">usd</option>
              <option value="eru">eru</option>
              <option value="xfa">Xfa</option>
            </select>
          </div>
        </div>
        <div className="Wallets__holder">
          <div className="wallet__one">
            <p>usd</p>
          </div>
          <div className="wallet__two">
            <p>euro</p>
          </div>
          <div className="wallet__three">
            <p>Xfa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletOPeration;
