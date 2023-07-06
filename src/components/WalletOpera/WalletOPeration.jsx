import React, { useContext } from 'react';
import './walletOperation.css';
import DepositBtn from '../Button/DepositBtn/DepositBtn';
import Transfer from '../Button/TranferBtn/Transfer';
import CurrencyExchanger from '../../Context/Context';

function WalletOPeration() {
  const { currency1, currency2, currency3, totalCurrency, handelSelect } =
    useContext(CurrencyExchanger);
  return (
    <div className="wallet__operation">
      <h1>International business payments</h1>
      <div className="wallet__operationContainer">
        <div className="operation__totalAmt">
          <p>Wallet Value</p>
          <span>{totalCurrency}</span>
        </div>
        <div className="multi__task">
          <DepositBtn />
          <Transfer />
          <div className="select__initial_value">
            <p>select Default currency</p>
            <select
              id="select__default"
              onChange={handelSelect}
              className="select__defult"
            >
              <option value="USD">usd</option>
              <option value="EUR">eru</option>
              <option value="XAF">Xfa</option>
            </select>
          </div>
        </div>
        <div className="Wallets__holder">
          <div className="wallet__one">
            <div className="wallet__oneInner">
              <p>USD</p>
              <p>{currency1}</p>
            </div>
          </div>
          <div className="wallet__one">
            <div className="wallet__oneInner">
              <p>Eru</p>
              <p>{currency2}</p>
            </div>
          </div>
          <div className="wallet__one">
            <div className="wallet__oneInner">
              <p>XFA</p>
              <p>{currency3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletOPeration;
