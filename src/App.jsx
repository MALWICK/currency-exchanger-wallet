/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CurrencyExchanger from './Context/Context';
import Wallet from './pages/Wallet/Wallet';
import Accounts from './pages/Accounts/Accounts';

function App() {
  const [currency1, setCurrency1] = useState(100);
  const [currency2, setCurrency2] = useState(500);
  const [currency3, setCurrency3] = useState(10000);
  const [totalCurrency, setTotalCurrency] = useState(0);
  const [select, setSelect] = useState();

  useEffect(() => {
    if (select === undefined) {
      const defaultCurrency = `${(
        currency2 * 1.07 +
        currency3 * 0.0016 +
        currency1
      ).toFixed(2)} USD`;
      setTotalCurrency(defaultCurrency);
    } else if (select === 'USD') {
      const amount2 = currency2 * 1.07;
      const amount3 = currency3 * 0.0016;
      const total = `${(amount2 + amount3 + currency1).toFixed(2)} USD`;
      setTotalCurrency(total);
    } else if (select === 'EUR') {
      const amount1 = currency1 * 0.93;
      const amount3 = currency3 * 0.0015;
      const total = `${(amount1 + amount3 + currency2).toFixed(2)} EUR`;
      setTotalCurrency(total);
    } else {
      const amount1 = currency1 * 610.76;
      const amount2 = currency2 * 655.76;
      const total = `${(amount1 + amount2 + currency3).toFixed(2)} XAF`;
      setTotalCurrency(total);
    }
  });

  const handelSelect = (e) => {
    setSelect(e.target.value);
  };
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
