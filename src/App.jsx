/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CurrencyExchanger from './Context/Context';
import Wallet from './pages/Wallet/Wallet';
import Accounts from './pages/Accounts/Accounts';

function App() {
  const [currency1, setCurrency1] = useState(0);
  const [currency2, setCurrency2] = useState(0);
  const [currency3, setCurrency3] = useState(0);
  const [totalCurrency, setTotalCurrency] = useState(0);
  const [select, setSelect] = useState();
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currencies, setCurrencies] = useState([]);
  const [apiKey] = useState('a4f445c212e54cca9ccf72f8038d2e09');
  const [rater, setRater] = useState([]);

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const response = await axios.get(
          `https://openexchangerates.org/api/currencies.json?app_id=${apiKey}`
        );
        setCurrencies(response.data);
        console.log(response.data);
        console.log(currencies);
      } catch (err) {
        console.error(err);
      }
    }
    fetchCurrencies();
  }, [apiKey]);

  async function fetchyRates() {
    try {
      const response = await axios.get(
        `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`
      );
      const { rates } = response.data;
      setRater(rates);

      if (select === undefined) {
        const defaultCurrency = `${(
          currency2 * rates.EUR +
          currency3 * rates.XAF +
          currency1
        ).toFixed(2)} USD`;
        setTotalCurrency(defaultCurrency);
      } else if (select === 'USD') {
        const amount2 = currency2 * rates.EUR;
        const amount3 = currency3 * rates.XAF;
        const total = `${(amount2 + amount3 + currency1).toFixed(2)} USD`;
        setTotalCurrency(total);
        console.log(setTotalCurrency(total));
        console.log(total);
      } else if (select === 'EUR') {
        const amount1 = currency1 * rates.USD;
        const amount3 = currency3 * rates.XAF;
        const total = `${(amount1 + amount3 + currency2).toFixed(2)} EUR`;
        setTotalCurrency(total);
        console.log(setTotalCurrency);
        console.log(total);
      } else {
        const amount1 = currency1 * rates.USD;
        const amount2 = currency2 * rates.EUR;
        const total = `${(amount1 + amount2 + currency3).toFixed(2)} XAF`;
        setTotalCurrency(total);
      }
    } catch (err) {
      console.error(err);
    }
  }
  fetchyRates();

  const handelSelect = (e) => {
    setSelect(e.target.value);
  };

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
    console.log(rater);
    const conversionRate = rater[toCurrency] / rater[fromCurrency];
    setConvertedAmount(amount * conversionRate).toFixed(2);
    console.log(rater.USD, rater.EUR, rater.XAF);

    console.log(setTotalCurrency);
  }

  return (
    <div className="App">
      <CurrencyExchanger.Provider
        value={{
          setCurrency1,
          setCurrency2,
          setCurrency3,
          currency1,
          currency2,
          currency3,
          setTotalCurrency,
          totalCurrency,
          handelSelect,
          fromCurrency,
          setFromCurrency,
          toCurrency,
          setToCurrency,
          convertedAmount,
          setConvertedAmount,
          currencies,
          setCurrencies,
          handleAmountChange,
          handleFromCurrencyChange,
          handleToCurrencyChange,
          handleConvert,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Wallet />} />
            <Route path="/account" element={<Accounts />} />
          </Routes>
        </BrowserRouter>
      </CurrencyExchanger.Provider>
    </div>
  );
}

export default App;
