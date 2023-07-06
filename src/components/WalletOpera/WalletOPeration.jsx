import React from 'react';
import './walletOperation.css';
import DepositBtn from '../Button/DepositBtn/DepositBtn';
import Transfer from '../Button/TranferBtn/Transfer';

function WalletOPeration() {
  return (
    <div className="wallet__operation">
      <h1>International business payments</h1>
      <div className="wallet__operationContainer">
        <div className="operation__totalAmt">
          <p>Wallet Value</p>
          <span>0.00</span>
        </div>
        <div className="multi__task">
          <DepositBtn />
          <Transfer />
          <div className="select__initial_value">
            <p>select Default currency</p>
            <select id="select__default" className="select__defult">
              <option value="usd">usd</option>
              <option value="eru">eru</option>
              <option value="xfa">Xfa</option>
            </select>
          </div>
        </div>
        <div className="Wallets__holder">
          <div className="wallet__one">
            <div className="wallet__oneInner">
              <p>USD</p>
              <p>0.00</p>
            </div>
          </div>
          <div className="wallet__one">
            <div className="wallet__oneInner">
              <p>Eru</p>
              <p>0.00</p>
            </div>
          </div>
          <div className="wallet__one">
            <div className="wallet__oneInner">
              <p>XFA</p>
              <p>0.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletOPeration;
