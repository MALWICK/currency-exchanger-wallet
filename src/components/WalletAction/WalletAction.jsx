import React, { useEffect, useState } from 'react';
import './WalletAction.css';
import axios from 'axios';

function WalletAction() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currencies, setCurrencies] = useState([]);
  const [apiKey] = useState('a4f445c212e54cca9ccf72f8038d2e09');

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const response = await axios.get(
          `https://openexchangerates.org/api/currencies.json?app_id=${apiKey}`
        );
        setCurrencies(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchCurrencies();
  }, [apiKey]);

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }

  function handleFromCurrencyChange(e) {
    setFromCurrency(e.target.value);
  }

  function handleToCurrencyChange(e) {
    setToCurrency(e.target.value);
  }

  async function handleConvert() {
    try {
      const response = await axios.get(
        `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`
      );
      const { rates } = response.data;
      console.log(rates);
      const conversionRate = rates[toCurrency] / rates[fromCurrency];
      setConvertedAmount(amount * conversionRate);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="wallet__action__innerContainer">
      <div className="firstwallet__Div">
        <div className="walletdiv1">
          <i className="fa-brands fa-gg-circle" />
          <p className="convert">Convert</p>
        </div>
        <div className="walletdiv1">
          <i className="fa-solid fa-square-arrow-up-right" />
          <p className="convert">Send</p>
        </div>
        <div className="walletdiv1">
          <i className="fa-solid fa-chart-line" />
          <p className="convert">Charts</p>
        </div>
        <div className="walletdiv1">
          <i className="fa-sharp fa-solid fa-bell" />
          <p className="convert">Alert</p>
        </div>
      </div>
      <div className="secondwallet__Div">
        <div className="input__div">
          <span>Amount</span>
          <input
            type="number"
            onChange={handleAmountChange}
            placeholder="Enter the amount to be converted"
          />
        </div>
        <div className="input__div">
          <span>From</span>
          <select
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
            className="currency-from-select input"
          >
            {Object.keys(currencies).map((code) => (
              <option key={code} value={code} className="currency-from-option">
                {currencies[code]}
              </option>
            ))}
          </select>
        </div>
        <div className="convert__logoAction">
          <span className="convertAction">
            <i className="fa-solid fa-repeat" />
          </span>
        </div>
        <div className="input__div">
          <span>To</span>
          <select
            value={toCurrency}
            onChange={handleToCurrencyChange}
            className="currency-to-select input"
          >
            {Object.keys(currencies).map((code) => (
              <option key={code} value={code} className="currency-to-option">
                {currencies[code]}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p className={convertedAmount === 0 ? 'hide-output' : 'currency-output'}>
        {convertedAmount} <span className="toCurrency">{toCurrency}</span>
      </p>
      <div className="text__action__button">
        <div className="text">
          <i className="fa-solid fa-circle-info" />
          <p>
            We use mid-makert rate for our Converter. This is for informational
            purposes only. you wont recieve this rate when sending Money.
            <span className="check___rates">Check send rates</span>
          </p>
        </div>
        <div className="btn__div">
          <button onClick={handleConvert} type="button">
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}

export default WalletAction;
