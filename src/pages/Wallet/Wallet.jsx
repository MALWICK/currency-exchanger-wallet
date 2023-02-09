import React, { useContext } from 'react';
import Styles from './Wallet.module.css';
import CurrencyExchanger from '../../Context/Context';

function Wallet() {
  const { currencyFetch, setCurrencyFetch } = useContext(CurrencyExchanger);
  console.log(currencyFetch.rates, setCurrencyFetch);
  return (
    <div className={Styles.wallet}>
      <div className={Styles.wallet__container}>
        <div className={Styles.left__container}>
          <input type="number" className={Styles.deposit} />
          <select>
            {currencyFetch.map((currency) => (
              <option value={currency}>USD</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
